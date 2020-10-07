const mongoose = require("mongoose");

const mongoConnect = async (uri) => {
  const options = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    await mongoose.connect(uri, options);
    console.log("Mongo Connected : " + uri);
  } catch (err) {
    console.log(err);
  }
};
module.exports = mongoConnect;
