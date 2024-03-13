const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {
    isReviewAuthor,
    validateReview,
    isLoggedin,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//*Reviews (POST)
router.post(
    "/",
    isLoggedin,
    validateReview,
    wrapAsync(reviewController.postReview)
);

//* Reviews (Delete)
router.delete(
    "/:reviewId",
    isLoggedin,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;
