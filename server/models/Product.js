const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    img:{url:String},
    name: String,
    categoryname:String,
    descrietion:String,
    price:Number,
    serial:Number,
});

module.exports = mongoose.model("Product", ProductSchema);