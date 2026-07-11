// backend/routes/bookingRoutes.js

const express = require("express");
const router = express.Router();
const { createBooking, farmerConfirm } = require("../controllers/bookingController");

// POST /api/bookings
router.post("/", createBooking);

// PUT /api/bookings/:bookingId/farmer-confirm
router.put("/:bookingId/farmer-confirm", farmerConfirm);

module.exports = router;
