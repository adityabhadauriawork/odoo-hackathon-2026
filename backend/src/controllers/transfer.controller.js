import Transfer from "../models/transfer.model.js";

// @desc    Create a new asset transfer request
// @route   POST /api/transfers
export const createTransfer = async (req, res) => {
  try {
    const { asset, fromUser, toUser, requestedBy, reason } = req.body;

    const transfer = await Transfer.create({
      asset,
      fromUser,
      toUser,
      requestedBy,
      reason
    });

    res.status(201).json(transfer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all transfers
// @route   GET /api/transfers
export const getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.find()
      .populate("asset", "name type") // Adjust asset fields as needed
      .populate("fromUser", "name email")
      .populate("toUser", "name email")
      .populate("requestedBy", "name email")
      .populate("approvedBy", "name email")
      .sort("-createdAt");

    res.status(200).json(transfers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single transfer by ID
// @route   GET /api/transfers/:id
export const getTransferById = async (req, res) => {
  try {
    const transfer = await Transfer.findById(req.params.id)
      .populate("asset")
      .populate("fromUser", "name email")
      .populate("toUser", "name email")
      .populate("requestedBy", "name email")
      .populate("approvedBy", "name email");

    if (!transfer) {
      return res.status(404).json({ message: "Transfer request not found." });
    }

    res.status(200).json(transfer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a transfer (e.g., approve, reject, or mark completed)
// @route   PUT /api/transfers/:id
export const updateTransfer = async (req, res) => {
  try {
    const { status, approvedBy, reason } = req.body;

    const transfer = await Transfer.findById(req.params.id);

    if (!transfer) {
      return res.status(404).json({ message: "Transfer request not found." });
    }

    // Update allowed fields
    if (status) transfer.status = status;
    if (approvedBy) transfer.approvedBy = approvedBy;
    if (reason) transfer.reason = reason;

    const updatedTransfer = await transfer.save();
    
    // Note: If status === "Completed", you would typically also trigger 
    // an update to the actual Asset model to change its 'assignedTo' or 'location' field.

    res.status(200).json(updatedTransfer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a transfer request
// @route   DELETE /api/transfers/:id
export const deleteTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.findByIdAndDelete(req.params.id);

    if (!transfer) {
      return res.status(404).json({ message: "Transfer request not found." });
    }

    res.status(200).json({ message: "Transfer request deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};