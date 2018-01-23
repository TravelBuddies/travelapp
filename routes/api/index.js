const router = require("express").Router();
const userRoutes = require("./user");
const flightRoutes = require("./flights");
const carRoutes = require("./cars");
const hotelRoutes = require("./hotels");
const tripHistoryRoutes = require("./triphistory");
const inspireRoutes = require("./hotels");

// // Book routes
// router.use("/books", bookRoutes);

// flights routes
router.use("/flights", flightRoutes);

// cars routes
router.use("/cars", carRoutes);

// hotels routes
router.use("/hotels", hotelRoutes);

// user routes
router.use("/user", userRoutes);

// travelhistory routes
router.use("/user/travelhistory", tripHistoryRoutes);

// // inspire routes
// router.use("/inspire", inspireRoutes);

module.exports = router;
