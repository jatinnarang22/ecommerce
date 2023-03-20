let express = require('express');
const Product = require('../../models/product');
let router = express.Router();

router.get('/products' , async(req,res)=>{
    let products = await Product.find();
    res.render('product/index' , {products} )
})

module.exports = router;