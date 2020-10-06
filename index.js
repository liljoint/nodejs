const express = require("express");

const mongoConnect = require("mongo");

const app = express();

const port = process.env.PORT || 3001;

const car = require("routes/car.routes");
app.use(express.json());
app.use("/car", car);
app.listen(port, () => console.log("Escuchando Puerto: " + port));
mongoConnect();
