// backend/controllers/cropResidueController.js

const CropResidue = require("../models/CropResidue");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");


const uploadResidue = async (req, res) => {
  try {
    const imagePaths = [];

    for (const file of req.files || []) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "green-kisan/residues",
      });

      imagePaths.push(result.secure_url);

      // Remove the temporary local file after successful upload
      fs.unlink(file.path, (err) => {
        if (err) console.error("Local file cleanup failed:", err);
      });
    }

    const residue = new CropResidue({
      cropName: req.body.cropName,
      residueType: req.body.residueType,
      quantity: req.body.quantity,
      location: req.body.location,
      uploaderName: req.body.uploaderName,
      uploaderContact: req.body.uploaderContact,
      farmerId: req.body.farmerId,
      images: imagePaths,
    });

    await residue.save();

    res.json({
      message: "Residue uploaded successfully!",
      residue,
    });

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({
      error: "Failed to upload residue",
    });
  }
};


const getResidues = async (req, res) => {
  try {
    const residues = await CropResidue.find();
    res.json(residues);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch residues" });
  }
};

const searchResidues = async (req, res) => {
  try {
    const { cropName, residueType, location, minQuantity } = req.query;
    let filter = {};

    if (cropName) filter.cropName = cropName;
    if (residueType) filter.residueType = residueType;
    if (location) filter.location = new RegExp(location, "i");
    if (minQuantity) filter.quantity = { $gte: Number(minQuantity) };

    const results = await CropResidue.find(filter);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
};

const getResiduesByFarmer = async (req, res) => {
  try {
    const { farmerId } = req.params;
    const residues = await CropResidue.find({ farmerId });
    res.json(residues);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch farmer residues" });
  }
};

const deleteResidue = async (req, res) => {
  try {
    await CropResidue.findByIdAndDelete(req.params.id);
    res.json({ message: "Residue deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete residue" });
  }
};

module.exports = { uploadResidue, getResidues, searchResidues, getResiduesByFarmer, deleteResidue };
