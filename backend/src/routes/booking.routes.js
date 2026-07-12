import express from "express";
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} from "../controllers/booking.controller.js";

// Note: Import your authentication/authorization middleware here 
// import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();

// Routes
router.route("/")
  .post(createBooking) // Add auth middleware: .post(protect, createBooking)
  .get(getBookings);   // Add auth middleware: .get(protect, getBookings)

router.route("/:id")
  .get(getBookingById) // Add auth middleware: .get(protect, getBookingById)
  .put(updateBooking)  // Add auth middleware: .put(protect, admin, updateBooking)
  .delete(deleteBooking); // Add auth middleware: .delete(protect, admin, deleteBooking)

export default router;