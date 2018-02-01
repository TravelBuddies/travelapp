const router = require("express").Router();
const userRoutes = require("./user");
const tripHistoryRoutes = require("./triphistory");


// user routes
router.use("/user", userRoutes);

// test new user routes
router.use("/newuser", userRoutes);

// travelhistory routes
router.use("/user/travelhistory", tripHistoryRoutes);

module.exports = router;
