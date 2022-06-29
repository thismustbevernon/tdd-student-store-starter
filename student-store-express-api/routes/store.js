const express = require("express")
//const { default: ProductView } = require("../../student-store-ui/src/components/ProductView/ProductView")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

// list all transactions
router.get("/products", async (req, res, next) => {
  try {
    const products = await Store.listProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})

// create new transaction
router.post("/products", async (req, res, next) => {
  try {
    const product = req.body.product
    const newProduct = await Store.createPurchase(product)
    res.status(201).json({ product: newProduct })
  } catch (err) {
    next(err)
  }
})

// fetch single transaction
router.get("/products/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Store.fetchProductById(productId)
    if (!product) {
      throw new NotFoundError("Transaction not found")
    }
    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
})


module.exports = router
