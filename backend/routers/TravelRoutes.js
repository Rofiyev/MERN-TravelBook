const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getOneTravel,
  addTravelBook,
  updateTravelBook,
  deleteTravelBook,
} = require("../controllers/travelControllers");

router.get("/", getAllTravels);
router.post("/add", addTravelBook);
router.get("/:id", getOneTravel);
router.put("/:id", updateTravelBook);
router.delete("/:id", deleteTravelBook);

module.exports = router;
