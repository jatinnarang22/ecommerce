let express = require('express');
const { removeListener } = require('../../models/product');
const Product = require('../../models/product');
let router = express.Router();

    router.get('/products' , async(req,res)=>{
        let products = await Product.find();
        res.render('product/index' , {products} )
    })
    //for new new itnes 
    router.get('/products/new' , (req,res)=>{
        res.render('product/new');
    });

    // to view the product detail
    router.get('/products/:id',async(req,res)=>{
        let {id}=req.params;
        // console.lof(res.prompt._id);
        let findid =  await Product.findById(id);
        res.render('product/show',{findid});
    });
    router.post('/products' , async(req,res)=>{
        let {name , img, price , desc} = req.body;
        await Product.create({name , img, price , desc});
        res.redirect('/products');
    });
    router.get('/products/:id/edit',async(req,res)=>{
        let {id} =req.params;
        let foundProduct = await Product.findById(id);
        res.render('product/update',{foundProduct});
    });
    router.patch('/products/:id',async(req,res)=>{
            let {id} =req.params;
            let {name,img,price,desc} = req.body;
            await Product.findOneAndUpdate(id,{name,img,price,desc});
            res.redirect('/products');
    });
    router.put ('products/:id',async(req,res)=>{
        let {id} =req.params;
        console.log(id);
        await Product.findOneAndDelete(id);
        res.redirect('/products');
    });
module.exports = router