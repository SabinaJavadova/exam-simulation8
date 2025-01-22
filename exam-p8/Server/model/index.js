const mongoose = require("mongoose");
const { Schema } = mongoose;

const goodSchema = new Schema({
  img: String,
  name: String,
  description:String,
  price: Number,
});

const goodModel = mongoose.model("good", goodSchema);

module.exports = goodModel;
