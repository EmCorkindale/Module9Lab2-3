"use strict";
const Models = require("../Models");
const getBooks = async(res) => {
  const data = await Models.Book.getBooks();
  res.send(data.data)
};

module.exports = { getBooks };
