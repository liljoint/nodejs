const Car = require("models/car.model");

const create = async (req, res) => {
  console.log("auto");
  const car = new Car({
    company: "BMW",
    model: "Modelo",
    price: 1000,
    year: 2000,
  });
  try {
    await car.save();
    return res.send("Creado correctamente");
  } catch (e) {
    res.send("Error");
  }
};

const list = async (req, res) => {
  const carList = await Car.find();
  res.send(carList);
};

const find = async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.params.id });
    if (!car)
      return res.status(404).send("No hemos encontrado un coche con ese ID");
    res.send(car);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = {
  create,
  list,
  find,
};
