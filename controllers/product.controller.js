const Product = require("../models/product.model.js");

const getProducts = async(req,res)=>{

    try{
      const products = await Product.find({})
      res.status(200).json(products)
  
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
}

const getProductById = async(req,res)=>{
    const {id}= req.params
    //console.log(id);
  
    try{
      const productbyid = await Product.findById(id)
      res.status(200).json(productbyid)
  
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
  }


const createProduct =  async(req,res)=>{

    try{
      const product = await Product.create(req.body)
      res.status(200).json({message: `Product ${product.name} added`})
  
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
  
  }

const updateProduct = async(req,res)=>{
    const {id}= req.params
    //console.log(id);
  
    try{
      const product = await Product.findByIdAndUpdate(id,req.body)
      
  
      if(!product){
        return res.status(400).json({message:"Product not found"})
      }
      
      const updatedproduct = await Product.findById(id)
      res.status(200).json(updatedproduct)
  
  
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
  }

 const deleteProduct =  async(req,res)=>{
    const {id}= req.params
    //console.log(id);
  
    try{
      const product = await Product.findByIdAndDelete(id)
      
  
      if(!product){
        return res.status(400).json({message:"Product not found"})
      }
      
      
      res.status(200).json({message: `Product ${product.name} deleted`})
  
  
    }
    catch(error){
      res.status(500).json({message:error.message})
    }
  }

module.exports = {
    getProducts,getProductById,createProduct,updateProduct,deleteProduct
}