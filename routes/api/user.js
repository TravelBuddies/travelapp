const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/flights"
router.route("/")
  .get(userController.findAll)
  // .delete(userController.remove);
  .post(userController.create);
  // .get(destinationController)
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
