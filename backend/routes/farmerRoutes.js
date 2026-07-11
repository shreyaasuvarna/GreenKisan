// backend/routes/farmerRoutes.js

const express = require("express");
const { farmerSignup, farmerSignin } = require("../controllers/farmerController");

const router = express.Router();

router.post("/signup", farmerSignup);
router.post("/signin", farmerSignin);

module.exports = router;
