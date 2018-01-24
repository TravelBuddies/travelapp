const router = require("express").Router();
const flightController = require("../../controllers/flightController");

// // Matches with "/api/flights"
router.route("/flights")
    .get(flightController.findAll)
    .post(flightController.create);
// .get(destinationController)
// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(flightController.findById)
    .put(flightController.update)
    .delete(flightController.remove);



module.exports = router;
