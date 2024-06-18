const mongoose = require("mongoose");



const URI=process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connection Succesfull");
  } catch (error) {
    console.log("Failed to connect with database", error);
    process.exit(0);
  }
};

module.exports = connectDB;
