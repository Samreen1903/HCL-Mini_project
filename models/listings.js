const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        default:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/503764986.jpg?k=d03505f72c94cff3b44d43fb1cd86207ef3d5fa2b546a3e569c5aaf081a5dda6&o=&hp=1",
        type: String,
        set: (v) =>
            v === ""
                ? "https://cf.bstatic.com/xdata/images/hotel/max1280x900/503764986.jpg?k=d03505f72c94cff3b44d43fb1cd86207ef3d5fa2b546a3e569c5aaf081a5dda6&o=&hp=1"
                : v,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: String,
        enum: [
            "Trending",
            "Rentals",
            "Iconic-cities",
            "Sharing",
            "Premium",
            "Pools",
        ],
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
