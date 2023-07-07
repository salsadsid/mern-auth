const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

userSchema.pre("save",function(next){
  const password=this.password;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  this.password = hashedPassword;
  next();
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
