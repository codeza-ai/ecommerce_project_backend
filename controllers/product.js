const Product = require("../models/product");

//Get products
async function getProduct(req, res) {
  const products = await Product.find({});
  res.json(products);
}

//Add product
async function addProduct(req, res) {
  const body = req.body;
  console.log(body);
  const name = body.productName;

  await Product.create({
    productName: body.productName,
    price: body.price,
    img: body.img,
  });
  res.status(201).json({ message: "Added new product" });
}


//Update product
async function updateProduct(req, res) {
  const body = req.body;
  const id = req.params.id;

  const pr = Product.findOne({_id: id});
  if(!pr){
    res.status(404).json({message: "No such product found!"});
    return;
  }

  await Product.updateOne(
    { _id: id },
    { productName: body.productName,price: body.price, img: body.img }
  );

  res.status(200).json({ message: "Updated product" });
}

//Delete product
async function deleteProduct(req, res) {
  const id = req.params.id;
  const pr = Product.findOne({ _id: id });
  if (!pr) {
    res.status(404).json({ message: "No such product found!" });
    return;
  }
  const body = req.body;
  console.log(body);
  await Product.deleteOne({ _id: id });
  res.status(200).json({ message: "Deleted product" });
}

module.exports = { getProduct, addProduct, updateProduct, deleteProduct };
