const router = require("express").Router();
const bookRoutes = require("./books");
const flightRoutes = require("./flights");
const carRoutes = require("./cars");
const hotelRoutes = require("./hotels");
const packageRoutes = require("./hotels");
const inspireRoutes = require("./hotels");

// // Book routes
// router.use("/books", bookRoutes);

// flights routes
router.use("/flights", flightRoutes);

// cars routes
router.use("/cars", carRoutes);

// hotels routes
router.use("/hotels", hotelRoutes);

// package routes
router.use("/packages", packageRoutes);

// // hotels routes
// router.use("/inspire", inspireRoutes);

module.exports = router;
