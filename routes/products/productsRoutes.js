let express = require("express");
const Product = require("../../models/product");
const User = require("../../models/User");
let router = express.Router();
const bcrypt = require("bcrypt");

router.get("/products", async (req, res) => {
  if (req.cookies.user_id) {
    let userid = User.findOne(req.cookies.user_id);
    if (userid) {
      let products = await Product.find();
      res.render("product/index", { products });
    } else {
      return res.redirect("./Signin");
    }
  } else {
    return res.redirect("./Signin");
  }
});

//for new new itnes
router.get("/products/new", (req, res) => {
  res.render("product/new");
});

// to view the product detail
// router.get('/products/:id',async(req,res)=>{
//     let {id}=req.params;
//     console.log("mil gayaa");
//     // console.lof(res.prompt._id);
//     let findid =  await Product.findById(id).populate('reviews');
//     // console.log(findid.reviews);
//     res.render('product/show',{findid});
// });

// to display a particular product
router.get("/products/:id", async (req, res) => {
  let { id } = req.params;
  let product = await Product.findById(id);
  let findid = await Product.findById(id).populate("reviews");
  res.render("product/show", { findid });
});

router.post("/products", async (req, res) => {
  let { name, img, price, desc } = req.body;
  await Product.create({ name, img, price, desc });
  res.redirect("/products");
});

router.get("/products/:id/edit", async (req, res) => {
  let { id } = req.params;
  let foundProduct = await Product.findById(id);
  res.render("product/update", { foundProduct });
});

router.patch("/products/:id", async (req, res) => {
  let { id } = req.params;
  let { name, img, price, desc } = req.body;
  await Product.findOneAndUpdate(id, { name, img, price, desc });
  res.redirect("/products");
});

router.delete("/products/:id", async (req, res) => {
  let { id } = req.params;
  await Product.findOneAndDelete(id);
  res.redirect("/products");
});
module.exports = router;
