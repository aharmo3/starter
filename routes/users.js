var express = require("express");
var router = express.Router();
const { ensureUserLoggedIn, ensureSameUser } = require("../middleware/guards");
const db = require("../model/helper");
const sql = require("./helpers");

/**
 * Get All Users
 */

router.get("/", ensureUserLoggedIn, async function (req, res, next) {
  try {
    let results = await db(sql.getAllUsers());
    let users = results.data;
    // don't return password
    users.forEach((u) => delete u.password);
    res.send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/**
 * Get one user
 * A user can only see his/her own profile info
 */
router.get("/:userId", ensureSameUser, async function (req, res, next) {
  let { userId } = req.params;

  try {
    let results = await db(sql.getUserById(userId));
    // We know user exists before he/she logged in!
    let user = results.data[0];
    // Don't return the password
    delete user.password;
    res.send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
