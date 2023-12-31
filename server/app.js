const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
const userRoute = require("./routes/user.routes");
const friendRoute = require("./routes/friends.routes");
const corsOptions = require("./config/corsOptions");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("MERN Auth App server is alive!");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/friend", friendRoute);

module.exports = app;
