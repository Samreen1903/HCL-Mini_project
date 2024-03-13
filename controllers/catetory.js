const Listing = require("../models/listings.js");

module.exports.Trending = async (req, res) => {
    let allListings = await Listing.find({ category: "Trending" });
    res.render("listings/index.ejs", { allListings });
};
module.exports.Rentals = async (req, res) => {
    let allListings = await Listing.find({ category: "Rentals" });
    res.render("listings/index.ejs", { allListings });
};
module.exports.Iconiccities = async (req, res) => {
    let allListings = await Listing.find({ category: "Iconic-cities" });
    res.render("listings/index.ejs", { allListings });
};
module.exports.Sharing = async (req, res) => {
    let allListings = await Listing.find({ category: "Sharing" });
    res.render("listings/index.ejs", { allListings });
};
module.exports.Society = async (req, res) => {
    let allListings = await Listing.find({ category: "Society" });
    res.render("listings/index.ejs", { allListings });
};
module.exports.Premium = async (req, res) => {
    let allListings = await Listing.find({ category: "Premium" });
    res.render("listings/index.ejs", { allListings });
};
module.exports.Pools = async (req, res) => {
    let allListings = await Listing.find({ category: "Pools" });
    res.render("listings/index.ejs", { allListings });
};
