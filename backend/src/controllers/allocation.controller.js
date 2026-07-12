import Allocation from "../models/allocation.model.js";

// @desc    Create a new asset allocation
// @route   POST /api/allocations
export const createAllocation = async (req, res) => {
  try {
    const { asset, employee, allocatedBy, expectedReturnDate } = req.body;

    const allocation = await Allocation.create({
      asset,
      employee,
      allocatedBy,
      expectedReturnDate
    });

    // Note: In a production app, you might also want to update the Asset model here 
    // to change its status to "Assigned" or "In Use".

    res.status(201).json(allocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all allocations
// @route   GET /api/allocations
export const getAllocations = async (req, res) => {
  try {
    const allocations = await Allocation.find()
      .populate("asset", "name type") // Adjust fields based on your Asset schema
      .populate("employee", "name email")
      .populate("allocatedBy", "name email")
      .sort("-createdAt");

    res.status(200).json(allocations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single allocation by ID
// @route   GET /api/allocations/:id
export const getAllocationById = async (req, res) => {
  try {
    const allocation = await Allocation.findById(req.params.id)
      .populate("asset")
      .populate("employee", "name email")
      .populate("allocatedBy", "name email");

    if (!allocation) {
      return res.status(404).json({ message: "Allocation not found." });
    }

    res.status(200).json(allocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update an allocation (e.g., mark as Returned or Overdue)
// @route   PUT /api/allocations/:id
export const updateAllocation = async (req, res) => {
  try {
    const { status, expectedReturnDate, conditionAtReturn } = req.body;

    const allocation = await Allocation.findById(req.params.id);

    if (!allocation) {
      return res.status(404).json({ message: "Allocation not found." });
    }

    // Handle updates
    if (status) allocation.status = status;
    if (expectedReturnDate) allocation.expectedReturnDate = expectedReturnDate;
    
    // If the asset is being returned, log the return date and condition
    if (status === "Returned" && allocation.status !== "Returned") {
      allocation.actualReturnDate = Date.now();
      if (conditionAtReturn) allocation.conditionAtReturn = conditionAtReturn;
      
      // Note: You might also want to update the actual Asset model's status back to "Available" here.
    }

    const updatedAllocation = await allocation.save();
    res.status(200).json(updatedAllocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an allocation
// @route   DELETE /api/allocations/:id
export const deleteAllocation = async (req, res) => {
  try {
    const allocation = await Allocation.findByIdAndDelete(req.params.id);

    if (!allocation) {
      return res.status(404).json({ message: "Allocation not found." });
    }

    res.status(200).json({ message: "Allocation deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};