const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: [true, "Username already exists."],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Provide a valid Email"],
    trim: true,
    lowercase: true,
    unique: [true, "User already exists."],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: (value) =>
        validator.isStrongPassword(value, {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 0,
          minNumbers: 1,
          minSymbols: 0,
        }),
      message: "Password {VALUE} is not strong enough.",
    },
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords don't match!",
    },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
