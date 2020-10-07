const config = {
  PORT: process.env.PORT || 3001,
  MONGO_URI: process.env.MONGO_URI || "mongodb://mongo:27017/testdb",
};
module.exports = config;
