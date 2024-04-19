const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./model");

app.use(express.json());

mongoose
  .connect("mongodb+srv://ganesh:ganesh@cluster7337.7exrzd7.mongodb.net/")
  .then(() => console.log("db connected..."));

app.post("/addproduct", async (req, res) => {
  const { name } = req.body;
  try {
    const newData = new Product({ name });
    await newData.save();
    return res.send("Product added");
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/", async (req, res) => {
  try {
    const data = await Product.find();
    return res.send('<h1>hi</h1>');
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(3000, () => console.log("server running..."));
