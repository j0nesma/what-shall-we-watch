const Joi = require("joi");
const db = require("./connections");

const schema = Joi.object().keys({
  username: Joi.string().required(),
  title: Joi.string().max(500).required(),
});

const films = db.get("films");

let film = function () {
  
  this.getAll = function () {
    return films.find();
  };

  this.get = function (user) {
    return films.findOne({ username: user });
  };

  this.create = function (film) {
    const result = Joi.validate(film, schema);
    if (result.error == null) {
      film.created = new Date();
      return films.insert(film);
    } else {
      return Promise.reject(result.error);
    }
  };

  this.patch = function (user, film) {
    if (user !== film.user) {
      throw new Error("Usernames do not match in url and body");
    }
    const result = Joi.validate(film, schema);
    if (result.error == null) {
      return films.findOneAndUpdate({ username: user }, { $set: film });
    } else {
      return Promise.reject(result.error);
    }
  };
};
module.exports = film;
