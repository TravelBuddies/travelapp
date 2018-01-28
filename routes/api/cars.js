const router = require("express").Router();
const carController = require("../../controllers/carController");

// Matches with "/api/flights"
// router.route("/cars")
//     .get(carController.findAll)
//     .post(carController.create);
// // .get(destinationController)
// // Matches with "/api/books/:id"
// router
//     .route("/:id")
//     .get(carController.findById)
//     .put(carController.update)
//     .delete(carController.remove);


module.exports = router;
