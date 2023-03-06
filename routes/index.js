var express = require("express");
var router = express.Router();
const db = require("../model/helper");
const sql = require("./helpers");

router.get("/", function (req, res, next) {
  res.send("Welcome to the API");
});
router.get("/companies/:id", async (req, res, next) => {
  const companyId = req.params.id;
  try {
    let result = await db(sql.getCompanyById(companyId));

    if (result) {
      let repos = await db(sql.getRepoById(companyId));
      if (repos.data.length) {
        result.data[0].repos = repos.data;
        res.send(result.data[0]);
      }
    } else {
      res.status(404).send({ msg: "This company does not exist" });
    }
  } catch (err) {
    console.log(err, `Network Error`);
  }
});

/* GET ALL COMPANIES & Repos*/
router.get("/companies", async (req, res, next) => {
  try {
    let result = await db(sql.getAllCompanies());
    if (result.data.length) {
      // Create Map of Promises with Repo data and wait to be resolved
      const all_repos = await Promise.all(
        result.data.map(async (item) => {
          const repos = await db(sql.getRepoById(item.id));
          return repos.data;
        })
      );
      // Take resolved promise results and format Json object
      const formattedResult = result.data.map((item, index) => ({
        ...item,
        repos: all_repos[index],
      }));
      res.send(formattedResult);
    } else {
      res.send({ msg: "There is no company data" });
    }
  } catch (err) {
    console.log(`Network Error`);
  }
});

router.post("/companies", async (req, res) => {
  const { company_name, repo } = req.body;
  const company = await db(sql.getCompanyByName(company_name));
  if (company.data.length) {
    const companyId = company.data[0].id;
    // If Company already exists, add repo information
    await db(sql.addRepo(repo[0], companyId));

    // return new list of repos
    const data = await db(sql.getAllRepos());
    res.status(201).send(data);
  } else {
    // Company Does not exist - Add it
    await db(sql.addCompany(company_name));
    // Get newly created ID of company
    const result = await db(sql.getCompanyByName(company_name));
    // Add Repo
    if (repo.length) {
      await db(sql.addRepo(repo[0], result.data[0].id));
      const data = await db(sql.getAllRepos());
      res.status(201).send(data);
    }
  }
});

module.exports = router;
