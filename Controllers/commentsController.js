"use strict";
const Models = require("../Models");
const getComments = (res) => {
  Models.Comment.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createComments = (data, res) => {
  Models.Comment.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const updateComments = (req, res) => {
  Models.Comment.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteComments = (req, res) => {
  Models.Comment.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  getComments,
  createComments,
  updateComments,
  deleteComments,
};
