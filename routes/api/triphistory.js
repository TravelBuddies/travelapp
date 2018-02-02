const router = require("express").Router();
const triphistoryController = require("../../controllers/triphistoryController");

// Matches with "/api/flights"
router.route("/")
  .get(triphistoryController.findAll)
  // .delete(triphistoryController.remove);
  .post(triphistoryController.create);
  // .get(destinationController)
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(triphistoryController.findById)
//   .put(triphistoryController.update)
//   .delete(triphistoryController.remove);

router.route("/:userId")
  .get(triphistoryController.findById)

module.exports = router;
