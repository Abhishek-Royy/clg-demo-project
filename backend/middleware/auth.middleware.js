const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { user } = require("../controllers/auth.controller");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized token, Token not valid" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  // console.log(jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    // console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    console.log(error, "boom bam");
    return res.status(401).json({ msg: "UnAuthorized token, Boom Baam Doom" });
  }
};

module.exports = authMiddleware;
