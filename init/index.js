const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main()
    .then(() => {
        console.log("Mongoose is connected Successfully");
    })
    .catch((err) => {
        console.log(err);
    });

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "65eebe6cd3be945d022b66c3",
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was InitialiZed");
};

initDB();
