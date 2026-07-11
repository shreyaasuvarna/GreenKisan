// backend/controllers/cropResidueController.js

const CropResidue = require("../models/CropResidue");

const uploadResidue = async (req, res) => {
  try {
    const imagePaths = req.files.map(
      (file) => `http://localhost:5000/uploads/${file.filename}`
    );

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
    res.json({ message: "Residue uploaded successfully!", residue });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload residue" });
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
