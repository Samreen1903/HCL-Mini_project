const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedin, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

router
    .route("/")
    //index
    .get(wrapAsync(listingController.index))
    //create
    .post(
        isLoggedin,
        validateListing,
        wrapAsync(listingController.createListing)
    );
// .post(upload.single("listing[image]"), (req, res) => {
//     res.send(req.file);
// });

//New Route
router.get("/new", isLoggedin, listingController.NewListingForm);

router
    .route("/:id")
    //show
    .get(wrapAsync(listingController.ShowListings))
    //update
    .put(
        isLoggedin,
        isOwner,
        validateListing,
        wrapAsync(listingController.updateListings)
    )
    //delete
    .delete(isLoggedin, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get(
    "/:id/edit",
    isLoggedin,
    isOwner,
    wrapAsync(listingController.editListingForm)
);

module.exports = router;
