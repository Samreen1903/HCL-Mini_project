const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const filterController = require("../controllers/catetory.js");

router.route("/Trending").get(wrapAsync(filterController.Trending));
router.route("/Rentals").get(wrapAsync(filterController.Rentals));
router.route("/Iconic-cities").get(wrapAsync(filterController.Iconiccities));
router.route("/Sharing").get(wrapAsync(filterController.Sharing));
router.route("/Society").get(wrapAsync(filterController.Society));
router.route("/Premium").get(wrapAsync(filterController.Premium));
router.route("/Pools").get(wrapAsync(filterController.Pools));

module.exports = router;
