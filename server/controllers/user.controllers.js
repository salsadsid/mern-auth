const { signupService } = require("../services/user.services");

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
