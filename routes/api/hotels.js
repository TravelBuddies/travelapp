const router = require("express").Router();
const hotelController = require("../../controllers/hotelController");

// // Matches with "/api/flights"
router.route("/hotels")
    .get(hotelController.findAll)
    .post(hotelController.create);

//     // Matches with "/api/books/:id"
router
    .route("/:id")
    .get(hotelController.findById)
    .put(hotelController.update)
    .delete(hotelController.remove);

module.exports = router;
