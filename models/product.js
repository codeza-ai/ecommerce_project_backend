const mongoose = require("mongoose");

const productSchema = new mongoose.Schema( {
    productName: {
        type: String,
        required: true,
        unique: true
    },
    price : {
        type: Number,
        required: true
    },
    img : {
        type: String
    }
}, { timestamps: true });

const Product = mongoose.model("product", productSchema);

module.exports = Product;