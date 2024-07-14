const express = require("express");
const router = express.Router();
const { getProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/product.js");

router
    .route("/")
    .get(getProduct);

router
    .route("/update")
    .post(addProduct);
router
    .route("/update/:id")
    .patch(updateProduct)
    .delete(deleteProduct);
module.exports = router;