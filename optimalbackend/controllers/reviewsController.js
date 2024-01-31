"use strict"
const Models = require("../models")

const createReview = (data, res) =>{
    Models.UserReviews.create(data)
    .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        throw err;
      });
};
const getReviews = (res) => {
    Models.UserReviews.findAll({})
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        throw err;
      });
  };
  module.exports = {
    createReview, getReviews,

  }