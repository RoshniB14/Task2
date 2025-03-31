const express = require('express');
const mongoose =require("mongoose");

const app = express();
app.use(express.json());
const port = 3000;

const Product = require("./Models/Product.js");
const Signin = require("./Models/Signin.js");
const Signup = require("./Models/Signup.js");



app.get("/getproducts", async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product);
    console.log("Data fetched");
  } catch (error) {
    res.send("Data not fetched");
  }
});

app.post("/addproducts", async (req, res) => {
  try {
          const product = await Product.create(req.body);
          res.status(200).json(product);
          console.log(req.body);
      } 
          catch (error) {
           res.send(500);
  }
});

app.post("/signin", async (req, res) => {
  try {
    const signin = await Signin.create(req.body);
    res.json(signin);
    console.log("User Created");
  } catch (error) {
    res.send("User not Created");
  }
});


app.post("/signup", async (req, res) => {
  try {
    const signup = await Signup.create(req.body);
    res.json(signup);
    console.log("User Created");
  } catch (error) {
    res.send("User not Created");
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose
  .connect(
    "mongodb+srv://Roshni:yK9a4xDpx5ZaKfGx@ecommerce.f3tddbs.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB Successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });