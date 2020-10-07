const express = require("express");

const mongoConnect = require("mongo");

const app = express();

const { PORT, MONGO_URI } = require("config");

const car = require("routes/car.routes");
app.use(express.json());
app.use("/car", car);
app.listen(PORT, () => console.log("Escuchando Puerto: " + PORT));
mongoConnect(MONGO_URI);
