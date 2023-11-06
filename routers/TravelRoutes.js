const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getOneTravel,
  addTravelBook,
} = require("../controllers/travelControllers");

router.get("/", getAllTravels);
router.post("/add", addTravelBook);
router.get("/:id", getOneTravel);

module.exports = router;
