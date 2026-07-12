import Booking from "../models/booking.model.js";

// @desc    Create new booking
// @route   POST /api/bookings
export const createBooking = async (req, res) => {
  try {
    const { asset, bookedBy, startTime, endTime, purpose } = req.body;

    // 1. Validate dates
    if (new Date(startTime) >= new Date(endTime)) {
      return res.status(400).json({ message: "End time must be after start time." });
    }

    // 2. Check for overlapping bookings for the same asset
    const overlappingBooking = await Booking.findOne({
      asset,
      status: { $ne: "Cancelled" }, // Cancelled bookings don't count as overlaps
      $or: [
        {
          startTime: { $lt: new Date(endTime) },
          endTime: { $gt: new Date(startTime) }
        }
      ]
    });

    if (overlappingBooking) {
      return res.status(409).json({ message: "Asset is already booked during this time." });
    }

    // 3. Create booking
    const booking = await Booking.create({
      asset,
      bookedBy,
      startTime,
      endTime,
      purpose
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("asset", "name type") // Adjust fields based on your Asset model
      .populate("bookedBy", "name email") // Adjust fields based on your User model
      .populate("approvedBy", "name email")
      .sort("-createdAt");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single booking by ID
// @route   GET /api/bookings/:id
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("asset")
      .populate("bookedBy", "name email")
      .populate("approvedBy", "name email");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a booking (e.g., status updates, approvals)
// @route   PUT /api/bookings/:id
export const updateBooking = async (req, res) => {
  try {
    const { status, approvedBy } = req.body;

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    // Update fields
    if (status) booking.status = status;
    if (approvedBy) booking.approvedBy = approvedBy;
    
    // If times are being updated, you should add another overlap check here

    const updatedBooking = await booking.save();
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a booking
// @route   DELETE /api/bookings/:id
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    res.status(200).json({ message: "Booking deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};