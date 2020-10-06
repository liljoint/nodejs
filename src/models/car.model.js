const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    enum: ["BMW", "AUDI", "SEAT"],
  },
  model: String,
  sold: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.sold;
    },
  },
  year: {
    type: Number,
  },
  date: { type: Date, default: Date.now },
});

const Car = mongoose.model("car", carSchema);

module.exports = Car;
