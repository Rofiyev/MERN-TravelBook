const Travel = require("../models/TravelModel");

//* Get All Travels Methods *//
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();

    res.status(200).json({
      message: "Successfully",
      travels,
    });
  } catch (error) {
    res.send(error);
  }
};

//* Get One Travel Methods *//
const getOneTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.send(404).json({ message: "Not Found" });
    }

    res.status(200).json({
      message: "Successfully",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};

//* Add Travel Methods *//
const addTravelBook = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const newTravel = await Travel.create({
      title,
      description,
      image,
      created_date: new Date(),
    });

    res.status(201).json({ message: "Created successfully", newTravel });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllTravels,
  getOneTravel,
  addTravelBook,
};
