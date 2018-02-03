const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"

router.route("/")
  .get(userController.findAll)
  // .delete(userController.remove);
  .post(userController.create);
  // .get(destinationController)
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);
// router
//   .route("/:id/history")
//   .get(userController.findById)

module.exports = router;
