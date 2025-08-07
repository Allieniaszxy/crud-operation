const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/school";
mongoose
  .connect(URI)
  .then(() => {
    console.log("connect to db successfully");
  })
  .catch((err) => {
    console.log("can't load this page" + err);
  });

module.exports = mongoose;
