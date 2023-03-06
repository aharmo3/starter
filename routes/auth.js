var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ensureSameUser } = require("../middleware/guards");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const db = require("../model/helper");
const sql = require("./helpers");

/**
 * Register a user
 */

router.post("/register", async (req, res) => {
  let { username, password, email } = req.body;
  let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  try {
    await db(sql.addUser(username, hashedPassword, email));
    res.send({ message: "Registration succeeded" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/**
 * Log in a user
 */

router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    let results = await db(sql.getUserByUsername(username));
    if (results.data.length === 0) {
      res.status(401).send({ error: "Login Failed" });
    } else {
      let user = results.data[0];
      let passwordsEqual = await bcrypt.compare(password, user.password);
      if (passwordsEqual) {
        // Passwords match
        let payload = { userId: user.id };
        // Create token containing user ID
        let token = jwt.sign(payload, SECRET_KEY);
        // Also return user (without password)
        delete user.password;
        res.send({
          message: "Login succeeded",
          token: token,
          user: user,
        });
      } else {
        // Passwords do not match
        res.status(401).send({ error: "Login failed" });
      }
    }
  } catch (err) {}
});

/**
 * Reset Password
 */

// router.post("/reset_password", ensureSameUser, async (req, res, next) => {
//   // You will need to token
//   // Verify that user is who they are
//   // Scramble password
//   // Update db with
//   let { userId } = req.params;
//   let { new_password, email } = req.body;
//   let hashedPassword = await bcrypt.hash(new_password, BCRYPT_WORK_FACTOR);
//   // let sql = `UPDATE users SET password = ${hashedPassword} WHERE email = ${email};`;

//   let sql = `UPDATE users SET password = ${hashedPassword} WHERE email = ${email};`;
//   await db(sql);
// });

module.exports = router;
