// backend/routes/bookingRoutes.js


const express = require("express");
const router = express.Router();

const {
  createBooking,
  farmerConfirm,
  getBookingsForIndustry,
  getBookingsForFarmer
} = require("../controllers/bookingController");

// Create a booking
router.post("/", createBooking);

// Farmer confirms or rejects a booking
router.put("/:bookingId/farmer-confirm", farmerConfirm);

// Get all bookings for an industry
router.get("/industry/:industryId", getBookingsForIndustry);

// Get all bookings for a farmer
router.get("/farmer/:farmerId", getBookingsForFarmer);

module.exports = router;
