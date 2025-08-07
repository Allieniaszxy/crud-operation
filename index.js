const express = require("express");
const app = express();
const PORT = 6789;
require("./config/db");
const studentRouter = require("./router/studentRouter");
app.use(express.json());
app.use("/api/students", studentRouter);

app.get("/signup", (req, res) => {
  console.log("you are on home page");

  res.json({
    message: "Signup successful",
  });
});

app.listen(PORT, () => {
  console.log(`Server is available on ${PORT}`);
});
