import Notification from "../models/notification.model.js";

/**
 * Creates and saves a new notification for a specific user.
 * 
 * @param {String} userId - The MongoDB ObjectId of the user receiving the notification
 * @param {String} title - Short title of the notification
 * @param {String} message - Detailed message
 * @param {String} type - "Asset" | "Maintenance" | "Booking" | "Transfer" | "Audit" | "System"
 * @returns {Object} The created notification document
 */
export const sendNotification = async (userId, title, message, type = "System") => {
  try {
    const notification = await Notification.create({
      user: userId,
      title,
      message,
      type
    });

    // Note: If you implement Socket.io for real-time alerts in the future, 
    // you would emit the event to the specific user room here.
    // e.g., io.to(userId.toString()).emit("new-notification", notification);

    return notification;
  } catch (error) {
    console.error("Error sending notification:", error.message);
    throw new Error("Failed to send notification");
  }
};

/**
 * Creates notifications for multiple users at once.
 * 
 * @param {Array<String>} userIds - Array of MongoDB ObjectIds
 * @param {String} title - Short title of the notification
 * @param {String} message - Detailed message
 * @param {String} type - Notification category
 * @returns {Array} Array of created notification documents
 */
export const sendBulkNotifications = async (userIds, title, message, type = "System") => {
  try {
    // Map the user IDs into an array of notification objects
    const notificationsData = userIds.map((id) => ({
      user: id,
      title,
      message,
      type
    }));

    // Perform a bulk insert for better database performance
    const notifications = await Notification.insertMany(notificationsData);

    return notifications;
  } catch (error) {
    console.error("Error sending bulk notifications:", error.message);
    throw new Error("Failed to send bulk notifications");
  }
};

/**
 * Marks all unread notifications for a specific user as read.
 * 
 * @param {String} userId - The MongoDB ObjectId of the user
 */
export const clearUserNotifications = async (userId) => {
  try {
    const result = await Notification.updateMany(
      { user: userId, isRead: false },
      { $set: { isRead: true } }
    );
    return result;
  } catch (error) {
    console.error("Error clearing notifications:", error.message);
    throw new Error("Failed to clear notifications");
  }
};