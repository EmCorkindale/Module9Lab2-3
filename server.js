const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
// parse requests of content-type -application / json;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
let userRoutes = require("./Routes/userRoutes");
app.use("/api/users", userRoutes);
let postRoutes = require("./Routes/postRoutes");
app.use("/api/posts", postRoutes);
let commentRoutes = require("./Routes/commentRoutes");
app.use("/api/comments", commentRoutes);
let bookRoutes = require("./Routes/bookRoutes");
app.use("/api/books", bookRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
