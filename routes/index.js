const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/graduates", (req, res) => {
  const url = "https://rad5graduates.herokuapp.com/api";
  res.status(200);
  request(url, { json: true }, (err, response, body) => {
    if (err) {
      console.error(err);
    } else {
      const data = body.classOf2020;
      res.render("graduates", { data });
    }
  });
});

module.exports = router;
