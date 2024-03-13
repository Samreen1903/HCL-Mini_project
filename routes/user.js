const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router
    .route("/signup")
    //signupForm
    .get(userController.renderSignupForm)
    //signup
    .post(wrapAsync(userController.signUp));

router
    .route("/login")
    //loginForm
    .get(userController.renderLoginForm)
    //login
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }),
        userController.login
    );

//!LOGOUT!!
router.get("/logout", userController.logout);

module.exports = router;
