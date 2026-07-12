import Notification from "../models/notification.model.js";

// @desc    Create a new notification
// @route   POST /api/notifications
export const createNotification = async (req, res) => {
  try {
    const { user, title, message, type } = req.body;

    const notification = await Notification.create({
      user,
      title,
      message,
      type
    });

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all notifications for a specific user
// @route   GET /api/notifications/user/:userId
export const getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.params.userId })
      .sort("-createdAt"); // Newest first

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark a specific notification as read
// @route   PATCH /api/notifications/:id/read
export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);

    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }

    notification.isRead = true;
    const updatedNotification = await notification.save();

    res.status(200).json(updatedNotification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark all notifications as read for a specific user
// @route   PATCH /api/notifications/user/:userId/read-all
export const markAllAsRead = async (req, res) => {
  try {
    const result = await Notification.updateMany(
      { user: req.params.userId, isRead: false },
      { $set: { isRead: true } }
    );

    res.status(200).json({ 
      message: "All notifications marked as read.",
      modifiedCount: result.modifiedCount 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a notification
// @route   DELETE /api/notifications/:id
export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);

    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }

    res.status(200).json({ message: "Notification deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};