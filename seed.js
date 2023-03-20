const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name: "iphone 14 pro",
        img:"https://images.unsplash.com/photo-1663408466313-2d4e7edaf172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTQlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price:"140000",
        desc:"bohat mahenga"
    },
    {
        name: "macbook pro",
        img:"https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        price:"250000",
        desc:"aukaat ke bahar"
    },
    {
        name: "iwatch",
        img:"https://images.unsplash.com/photo-1600948891299-30a7f822e6d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price:"70000",
        desc:"useless product"
    },
    {
        name: "ipad",
        img:"https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZCUyMGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price:"90000",
        desc:"badiya product"
    },
    {
        name: "airpods",
        img:"https://images.unsplash.com/photo-1644848545549-90a2f0b50c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWlycG9kcyUyMGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price:"25000",
        desc:"vahiyaad"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("DB seeded")
}
module.exports = seedDB;
