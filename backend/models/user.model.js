const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Provide your name!"],
      minLength: [3, "Name must contain atleast 3 charecter!"],
      maxLength: [20, "Name not more than 20 charecter"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email!"],
    },
    phone: {
      type: Number,
      required: [true, "Please provide your phone Number!"],
    },
    password: {
      type: String,
      required: [true, "Please provide your password!"],
      unique: true,
      minlength: [6, "Password must contain atleast 6 charecter!"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const hashSaltRound = 10;
    const hashPassword = await bcrypt.hash(user.password, hashSaltRound);
    user.password = hashPassword;
  } catch (error) {
    console.log({ message: "error in hashcodeing Password" }, error);
  }
});

//json web token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        //payload
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY, //signature
      {
        expiresIn: "15d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const User = new mongoose.model("RegisterUser", userSchema);

module.exports = User;
