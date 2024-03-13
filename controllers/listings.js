const Listing = require("../models/listings.js");

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.NewListingForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.ShowListings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you are trying to find does not exist!");
        res.redirect("/listings");
    } else {
        res.render("listings/show.ejs", { listing });
    }
};

module.exports.createListing = async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    // console.log(newListing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.editListingForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you are trying to edit does not exist!");
        res.redirect("/listings");
    } else {
        res.render("listings/edit.ejs", { listing });
    }
};

module.exports.updateListings = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};
