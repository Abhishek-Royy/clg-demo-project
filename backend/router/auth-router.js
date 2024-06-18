const express = require("express");
const router = express.Router();
const authControllerAllPage = require("../controllers/auth.controller");
const validateMiddleware = require("../middleware/validate.middleware");
const signUpSchema = require("../validators/auth.validator");
const authMiddleware = require("../middleware/auth.middleware");

router.route("https://clg-demo-project-frontend.onrender.com/").get(authControllerAllPage.homePage);

router
  .route("https://clg-demo-project-frontend.onrender.com/register")
  .post(validateMiddleware(signUpSchema), authControllerAllPage.registerPage);

router.route("https://clg-demo-project-frontend.onrender.com/login").post(authControllerAllPage.loginPage);

router.route("https://clg-demo-project-frontend.onrender.com/user").get(authMiddleware, authControllerAllPage.user);

module.exports = router;


