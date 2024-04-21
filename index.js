const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./model");

app.use(express.json());

const PORT = process.env.PORT || 3000;

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

app.get("/api/getdata", async (req, res) => {
  try {
    const data = await Product.find();
    return res.send(data);
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(PORT, () => console.log("server running..."));
