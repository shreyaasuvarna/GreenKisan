// backend/controllers/bookingController.js

const Booking = require("../models/Booking");
const CropResidue = require("../models/CropResidue");
const Notification = require("../models/Notification");
const Industry = require("../models/industry");

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { residueId, industryId, quantityBooked, totalPrice } = req.body;

    const residue = await CropResidue.findById(residueId);
    if (!residue) return res.status(404).json({ message: "Residue not found" });

    if (quantityBooked > residue.quantity) {
      return res.status(400).json({ message: "Requested quantity exceeds available quantity" });
    }

    const booking = new Booking({
      residueId,
      farmerId: residue.farmerId,
      industryId,
      quantityBooked,
      totalPrice,
      paymentMethod: "COD",
      paymentStatus: "pending",
      status: "Pending",
    });

    await booking.save();

    const industry = await Industry.findById(industryId);

    await Notification.create({
      farmerId: residue.farmerId,
      bookingId: booking._id,
      message: `${industry?.companyName || "An industry"} has booked your residue "${residue.cropName}". Please confirm.`,
    });

    res.json({ message: "Booking created", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create booking" });
  }
};

// Farmer confirms or rejects a booking
const farmerConfirm = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { action } = req.body; // "confirm" or "reject"

    if (!["confirm", "reject"].includes(action)) {
      return res.status(400).json({ message: "Invalid action" });
    }

    const update = action === "confirm"
      ? { status: "FarmerConfirmed" }
      : { status: "Rejected" };

    const booking = await Booking.findByIdAndUpdate(bookingId, update, { new: true });

    if (action === "confirm") {
      await CropResidue.findByIdAndUpdate(
        booking.residueId,
        { $inc: { quantity: -booking.quantityBooked } }
      );
    }

    res.json({ message: `Booking ${action}`, booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update booking" });
  }
};

// Get notifications for a farmer
const getNotificationsForFarmer = async (req, res) => {
  try {
    const { farmerId } = req.params;
    const notifications = await Notification.find({ farmerId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};

module.exports = { createBooking, farmerConfirm, getNotificationsForFarmer };
