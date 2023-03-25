const express = require('express');
const Product = require('../models/product');
const Review = require('../models/review');
const  router = express.Router();

router.post('/products/:productId/review' , async(req,res)=>{
    let {rating,comment} = req.body;
    let {productId} = req.params;
    
    let product = await Product.findById(productId);
    // console.log(product);
    let review = new Review({rating,comment});
    product.reviews.push(review);
    await review.save();
    await product.save();
    // console.log(`${productId}`);
    // res.send('review mil gya');
    res.redirect(`/products/${productId}`)

} )

module.exports = router;