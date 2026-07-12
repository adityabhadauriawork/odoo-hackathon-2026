import Maintenance from "../models/maintenance.model.js";
// 1. Import the notification service
import { sendNotification } from "../services/notification.service.js"; 

// @desc    Create a new maintenance request
// @route   POST /api/maintenance
export const createMaintenanceRequest = async (req, res) => {
  try {
    const { asset, raisedBy, issue, priority, images } = req.body;

    const maintenance = await Maintenance.create({
      asset,
      raisedBy,
      issue,
      priority,
      images
    });

    // 2. Automatically notify the employee that their request was logged
    await sendNotification(
      raisedBy,
      "Maintenance Request Logged",
      `Your maintenance ticket for the issue "${issue}" has been submitted successfully and is pending review.`,
      "Maintenance"
    );

    res.status(201).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all maintenance requests
// @route   GET /api/maintenance
export const getAllMaintenanceRequests = async (req, res) => {
  try {
    const maintenanceRequests = await Maintenance.find()
      .populate("asset", "name type") 
      .populate("raisedBy", "name email")
      .populate("technician", "name email")
      .populate("approvedBy", "name email")
      .sort("-createdAt");

    res.status(200).json(maintenanceRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single maintenance request by ID
// @route   GET /api/maintenance/:id
export const getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id)
      .populate("asset")
      .populate("raisedBy", "name email")
      .populate("technician", "name email")
      .populate("approvedBy", "name email");

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance request not found." });
    }

    res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a maintenance request (e.g., assign tech, update status, add resolution)
// @route   PUT /api/maintenance/:id
export const updateMaintenanceRequest = async (req, res) => {
  try {
    const { status, priority, technician, resolution, approvedBy } = req.body;

    const maintenance = await Maintenance.findById(req.params.id);

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance request not found." });
    }

    // 3. Keep track of specific changes BEFORE saving to trigger accurate notifications
    const oldTechnician = maintenance.technician;
    const oldStatus = maintenance.status;

    // Update fields if they are provided in the request body
    if (status) maintenance.status = status;
    if (priority) maintenance.priority = priority;
    if (technician) maintenance.technician = technician;
    if (resolution) maintenance.resolution = resolution;
    if (approvedBy) maintenance.approvedBy = approvedBy;

    const updatedMaintenance = await maintenance.save();

    // 4. Trigger Notifications conditionally based on what changed
    
    // Condition A: A new technician has been assigned to the request
    if (technician && String(oldTechnician) !== String(technician)) {
      await sendNotification(
        technician,
        "New Maintenance Assignment",
        `You have been assigned to handle a maintenance issue: "${maintenance.issue}". Priority: ${maintenance.priority}.`,
        "Maintenance"
      );
    }

    // Condition B: The status of the request has been changed (e.g., In Progress, Resolved)
    if (status && oldStatus !== status) {
      await sendNotification(
        maintenance.raisedBy,
        `Ticket Status Update: ${status}`,
        `The status of your maintenance request for "${maintenance.issue}" has been updated to "${status}".`,
        "Maintenance"
      );
    }

    res.status(200).json(updatedMaintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a maintenance request
// @route   DELETE /api/maintenance/:id
export const deleteMaintenanceRequest = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id);

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance request not found." });
    }

    res.status(200).json({ message: "Maintenance request deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};