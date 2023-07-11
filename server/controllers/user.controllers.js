const {
  signupService,
  findUserByEmail,
  findAndUpdateUserProfile,
} = require("../services/user.services");
const { generateToken } = require("../utils/generateToken");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await signupService(req.body);
    console.log(user);
    res.status(200).json({
      status: "Success",
      message: "Successfully Sign Up",
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "Fail",
        message: "Please provide your credentials",
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "Fail",
        message: "No User found. Please create an account",
      });
    }
    const isPasswordValid = await user.comparePassword(password, user.password);
    // console.log(isPasswordValid,user)

    if (!isPasswordValid) {
      return res.status(401).json({
        status: "Fail",
        message: "Password is not correct",
      });
    }
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: user.email,
          role: user.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // console.log(accessToken,"access")
    const refreshToken = jwt.sign(
      { email: user.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );
    // console.log(refreshToken,"refre")
    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true, //accessible only by web server
      secure: true, //https
      sameSite: "None", //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });

    // Send accessToken containing username and roles
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error,
    });
  }
};

exports.persistAuth = async (req, res, next) => {
  try {
    const cookie = req.cookies;
    console.log(cookie);
    if (!cookie?.jwt) return res.status(401).json({ message: "Unauthorized" });

    const refreshToken = cookie.jwt;
    console.log(refreshToken);
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.status(403).json({ message: "Forbidden" });
        const email = decoded?.email;
        const user = await findUserByEmail(email);

        if (!user) return res.status(401).json({ message: "Unauthorized" });

        const accessToken = jwt.sign(
          {
            UserInfo: {
              email: user.email,
              role: user.role,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );

        res.json({ accessToken });
      }
    );
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error,
    });
  }
};
exports.userDetails = async (req, res, next) => {
  const email = req.params.email;
  const user = await findUserByEmail(email);
  res.json(user);
};

exports.updateProfile = async (req, res, next) => {
  try {
    console.log(req.body);
    const skills=req.body?.skills.filter(skill=>skill!="")
    req.body.skills=skills;
    const hobbies=req.body?.hobbies.filter(hobbie=>hobbie!="")
    req.body.hobbies=hobbies;
    const result = await findAndUpdateUserProfile(req.body._id, req.body);
    if (result) {
      res.status(200).json({
        status: "success",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error,
    });
  }
};
exports.logOut = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};
