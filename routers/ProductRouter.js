const express=require("express");
const ProductService = require("../services/ProductService");
const ProductRouter = express.Router();
const ProductModel=require('../models/ProductModel');
//const { findByIdAndDelete } = require("../models/UserModel");

ProductRouter.get('/product',async function (req, res) {
    console.log("Router Working");
    res.json(await ProductService.findAll())
});

ProductRouter.get("/product/:category", async (req, res) => {
    var { category } = req.params;
    var products = await ProductService.getByCategory(category);
    res.json(products);
});

ProductRouter.post("/product/add",async(req,res)=>{
    var product=req.body
    await ProductService.addProduct(product)
    res.json(await ProductService.findAll())
});

ProductRouter.delete("/product/:id",async(req,res)=>{
     var {id}=req.params
     res.json(await ProductService.removeProduct(id))
 });


module.exports= ProductRouter;