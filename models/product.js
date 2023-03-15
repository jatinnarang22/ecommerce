const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    img: {
        type:String,
        trim: true,
        default:'/images/dummy.jpg'
    },
    price:{
        type:Number,
        min: 0,
        default:"price mising",
        required:true
    },
    desc:{
        type:String,
        trim:true
    }
})


let Product = mongoose.model('Product' , productSchema);
module.exports = Product;
