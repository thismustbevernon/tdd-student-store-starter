const express = require("express");
const Store = require("../models/store");
const { NotFoundError } = require("../utils/errors");
const router = express.Router();
const { storage } = require("../data/storage")

// list all products
router.get("/", async (req, res, next) => {
  try {
    const products = await Store.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});

// create new purchase
router.post("/", (req, res, next) => {
  try {
    // console.log(req.body.shoppingCart)
    // console.log(req.body.user)
    const cart = req.body.shoppingCart;
    const user = req.body.user;
    const newPurchase = Store.createPurchase(cart, user);
    const purchases = storage.get("purchases");

    res.status(201).json({ purchase: newPurchase });
    purchases.push(newPurchase).write();
  } catch (err) {
    next(err);
  }
});

// fetch single product Id
router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Store.fetchProductById(productId);
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
