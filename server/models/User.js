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
    role: {
      type: String,
      enum: ["user", "moderator", "admin"],
      default: "user",
    },
    aboutMe:{
      type:String
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
    skills:[{
      type:String
    }],
    Hobbies:[{
      type:String
    }]
  },
  { timestamps: true }
);

userSchema.pre("save",function(next){
  const password=this.password;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  this.password = hashedPassword;
  next();
})

userSchema.methods.comparePassword = async function (password, hash) {
  let isPasswordValid;
  
  isPasswordValid = await bcrypt.compare(password, hash);
  console.log(isPasswordValid,"sa")
  return isPasswordValid;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
