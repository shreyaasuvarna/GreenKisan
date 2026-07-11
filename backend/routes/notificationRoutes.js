// backend/routes/notificationRoutes.js

const express = require("express");
const router = express.Router();
const { getNotificationsForFarmer } = require("../controllers/bookingController");

// GET /api/notifications/:farmerId
router.get("/:farmerId", getNotificationsForFarmer);

module.exports = router;
