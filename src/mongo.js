const mongoose = require("mongoose");

const mongoConnect = async () => {
  const uri = "mongodb://localhost:27017/testdb";

  const options = { useUnifiedTopology: true, useNewUrlParser: true };
  try {
    await mongoose.connect(uri, options);
    console.log("Mongo Connected : " + uri);
  } catch (err) {
    console.log(err);
  }
};
module.exports = mongoConnect;
