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
    const { action } = req.body;

    if (!["confirm", "reject"].includes(action)) {
      return res.status(400).json({ message: "Invalid action" });
    }

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.status !== "Pending" && booking.status !== "Booked") {
      return res.status(400).json({
        message: "This booking has already been processed"
      });
    }

    if (action === "confirm") {
      const residue = await CropResidue.findOneAndUpdate(
        {
          _id: booking.residueId,
          quantity: { $gte: booking.quantityBooked }
        },
        {
          $inc: { quantity: -booking.quantityBooked }
        },
        { new: true }
      );

      if (!residue) {
        return res.status(400).json({
          message: "Insufficient residue quantity available"
        });
      }

      booking.status = "FarmerConfirmed";
    } else {
      booking.status = "Rejected";
    }

    await booking.save();

    res.json({
      message: `Booking ${action}ed successfully`,
      booking
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to update booking"
    });
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

// Get all bookings for an industry
const getBookingsForIndustry = async (req, res) => {
  try {
    const { industryId } = req.params;

    const bookings = await Booking.find({ industryId })
      .populate("residueId")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch industry bookings" });
  }
};

// Get all bookings for a farmer
const getBookingsForFarmer = async (req, res) => {
  try {
    const { farmerId } = req.params;

    const bookings = await Booking.find({ farmerId })
      .populate("residueId")
      .populate("industryId")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch farmer bookings" });
  }
};

module.exports = {
  createBooking,
  farmerConfirm,
  getNotificationsForFarmer,
  getBookingsForIndustry,
  getBookingsForFarmer
};
