let express = require("express");
let router = express.Router();
const Product = require("../models/product");
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/SignIn", async (req, res) => {
  res.render("auth/user_sign_in");
});
router.get("/Signup", async (req, res) => {
  res.render("auth/user_sign_up");
});

router.post("/create", async (req, res) => {
  try {
    if (req.body.password != req.body.Confirm_password) {
      console.log("password doesn't match");
      return res.redirect("back");
    }

    let { name, email, password } = req.body;
    // console.log(name, email, password);
    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    let olduser = await User.findOne({ email });

    if (olduser) {
      console.log("old user");
      return res.redirect("back");
    }

    // Create user in our database
    encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      name: name,
      email: email,
      password: encryptedUserPassword,
    });

    //Create token
    // const token = jwt.sign(
    //   {user_id: user._id,email },
    //   process.env.TOKEN_KEY,
    //   {
    //     expiresIn:"5h",
    //   }
    // );
    // // save user token
    // user.token = token;
    res.redirect("./SignIn");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

router.post("/create-session", async (req, res) => {
  try {
    // let Product = await Product.find({});
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.cookie("user_id", user.id);
      console.log(res.cookie.user_id);
      res.redirect("/products");
    } else {
      console("error u have to first signup");
      res.redirect("./SignUp");
    }

    //  (err, user) => {
    //   if (err) {
    //     console.log("error in finding user in signing up");
    //     return;
    //   }

    //   if (!user) {
    //     console("error u have to first signup");
    //     return res.redirect("back");
    //   } else {
    //     if (user.password != req.body.password) {
    //       console.log(
    //         "your password is wrrong plz check it before moving asside"
    //       );
    //       return res.redirect("back");
    //     } else {
    //       res.cookie("user_id", user.id);
    //       return res.redirect("./product/profile");
    //     }
    //   }
    // }
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

module.exports = router;
