var express = require('express');
var router = express.Router();
var films = require("../db/films");
var filmObj = new films();

router.get("/", (req, res) => {
  filmObj.getAll().then((returned) => {
    res.json(returned);
  });
});

router.post("/", (req, res) => {
  filmObj
    .create(req.body)
    .then((film) => {
      res.json(film);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

router.get("/:user", (req, res) => {
  filmObj.get(req.params.user).then((films) => {
    res.json(films);
  });
});

router.patch("/:user", (req, res) => {
  filmObj
    .patch(req.params.user, req.body)
    .then((films) => {
      res.json(films);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

module.exports = router;