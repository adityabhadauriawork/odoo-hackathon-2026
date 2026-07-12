import ActivityLog from "../models/activityLog.model.js";

// @desc    Create a new activity log
// @route   POST /api/activity-logs
// Note: In a real app, this is often called internally by other controllers rather than via a direct API route.
export const createActivityLog = async (req, res) => {
  try {
    const { user, action, module, entityType, entityId, description } = req.body;

    const activityLog = await ActivityLog.create({
      user,
      action,
      module,
      entityType,
      entityId,
      description
    });

    res.status(201).json(activityLog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all activity logs
// @route   GET /api/activity-logs
export const getActivityLogs = async (req, res) => {
  try {
    // You can easily add query filters here later (e.g., req.query.module or req.query.user)
    const logs = await ActivityLog.find()
      .populate("user", "name email") // Adjust based on your User schema fields
      .sort("-createdAt"); // Show newest logs first

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single activity log by ID
// @route   GET /api/activity-logs/:id
export const getActivityLogById = async (req, res) => {
  try {
    const log = await ActivityLog.findById(req.params.id)
      .populate("user", "name email");

    if (!log) {
      return res.status(404).json({ message: "Activity log not found." });
    }

    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an activity log
// @route   DELETE /api/activity-logs/:id
// Note: Usually restricted to Super Admins for system cleanup
export const deleteActivityLog = async (req, res) => {
  try {
    const log = await ActivityLog.findByIdAndDelete(req.params.id);

    if (!log) {
      return res.status(404).json({ message: "Activity log not found." });
    }

    res.status(200).json({ message: "Activity log deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};