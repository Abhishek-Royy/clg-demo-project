const User = require("../models/user.model");
const { user } = require("./auth.controller");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

// DELETE FUNCTION
const deleteUserbyId = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ msg: "User deleted successfully..!" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, deleteUserbyId };
