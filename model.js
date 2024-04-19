const mongoose = require("mongoose");

const Product = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("product", Product);
