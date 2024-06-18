const express = require("express");
const adminController = require("../controllers/admin.controller");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

const router = express.Router();

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

// FOR DELETE FUNCTION
router
  .route("users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserbyId);

module.exports = router;
