// backend/routes/cropResidueRoutes.js

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  uploadResidue,
  getResidues,
  searchResidues,
  getResiduesByFarmer,
  deleteResidue,
} = require("../controllers/cropResidueController");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Upload residue with images
router.post("/upload", upload.array("images", 5), uploadResidue);

// Get all residues (for industry search)
router.get("/all", getResidues);

// Search residues
router.get("/search", searchResidues);

// Get residues by farmer
router.get("/farmer/:farmerId", getResiduesByFarmer);

// Delete a residue
router.delete("/:id", deleteResidue);

module.exports = router;
