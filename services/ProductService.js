const mongoose=require('mongoose')
const ProductModule=require('../models/ProductModel')
const ProductService={
    addProduct:async(product)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Books")
        var pDoc=await ProductModule.create(product)
        // mongoose.connection.close()
        return pDoc
    },
    removeProduct:async(productid)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Books")
        var data=await ProductModule.findOneAndDelete({id:productid})
        // mongoose.connection.close()
        return data
    },
    getByCategory:async(categoryValue)=>{
        await mongoose.connect("mongodb://127.0.0.1:27017/Books")
        var products=await ProductModule.find({category:categoryValue})
        // mongoose.connection.close()
        return products
    },
    findAll:async()=>{
        await await mongoose.connect("mongodb://127.0.0.1:27017/Books")
        var products=await ProductModule.find()
        // mongoose.connection.close()
        return products
    }
    
}
module.exports=ProductService;