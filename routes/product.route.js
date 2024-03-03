const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {getProducts,getProductById,updateProduct,createProduct,deleteProduct} =  require("../controllers/product.controller.js")

router.get("/",getProducts);
router.get("/:id",getProductById);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct)
module.exports = router;