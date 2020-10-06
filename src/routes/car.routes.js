const express = require("express");

const router = express.Router();

const car = require("controllers/car.controller");

router.get("/", car.list);

router.post("/add", car.create);

router.get("/find/:id", car.find);

module.exports = router;
