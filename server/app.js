const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
const userRoute = require("./routes/user.routes");

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("MERN Auth App server is alive!");
});

app.use("/api/v1/user", userRoute);

module.exports = app;
