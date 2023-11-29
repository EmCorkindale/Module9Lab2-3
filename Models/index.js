"use strict";
const User = require("./user"); //require the model
const Posts = require("./post");
const Comment = require("./comments");
const Book = require("./books")

User.hasMany(Posts, {as: "posts", foreignKey: "userID"});
Posts.belongsTo(User, {as: "posts", foreignKey: "userID"});

async function init() {
  await User.sync(); //sync the model
  await Posts.sync(); //sync the model
  await Comment.sync(); //sync the model

  
}
init();
module.exports = {
  User, Posts, Comment, Book //export the model
};
