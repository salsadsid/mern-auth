const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
const userRoute = require("./routes/user.routes");
const corsOptions = require("./config/corsOptions");

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("MERN Auth App server is alive!");
});

app.use("/api/v1/user", userRoute);

module.exports = app;
