const express = require("express");
const router = express.Router();
const booksController = require("../Controllers/booksController");
router.get("/", (req, res) => {
  booksController.getBooks(res);
});
module.exports = router;
