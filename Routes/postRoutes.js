const express = require("express");
const router = express.Router();

const Controllers = require("../Controllers");
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});
router.put("/:postID/like", (req, res) => {
  Controllers.postController.like(req.params.postID, res);
});


module.exports = router;
