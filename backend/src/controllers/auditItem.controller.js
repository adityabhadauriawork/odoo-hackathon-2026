import AuditItem from "../models/auditItem.model.js";

// @desc    Create a new audit item record
// @route   POST /api/audit-items
export const createAuditItem = async (req, res) => {
  try {
    const { audit, asset, verifiedBy, status, remarks, verifiedAt } = req.body;

    const auditItem = await AuditItem.create({
      audit,
      asset,
      verifiedBy,
      status,
      remarks,
      verifiedAt
    });

    res.status(201).json(auditItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all audit items
// @route   GET /api/audit-items
export const getAuditItems = async (req, res) => {
  try {
    const auditItems = await AuditItem.find()
      .populate("audit", "title scheduledDate status") // Adjust based on your Audit schema fields
      .populate("asset", "name serialNumber type")    // Adjust based on your Asset schema fields
      .populate("verifiedBy", "name email")
      .sort("-createdAt");

    res.status(200).json(auditItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all audit items under a specific parent audit
// @route   GET /api/audit-items/audit/:auditId
export const getAuditItemsByAudit = async (req, res) => {
  try {
    const auditItems = await AuditItem.find({ audit: req.params.auditId })
      .populate("asset", "name serialNumber type")
      .populate("verifiedBy", "name email")
      .sort("status"); // Groups similar statuses together

    res.status(200).json(auditItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single audit item by ID
// @route   GET /api/audit-items/:id
export const getAuditItemById = async (req, res) => {
  try {
    const auditItem = await AuditItem.findById(req.params.id)
      .populate("audit")
      .populate("asset")
      .populate("verifiedBy", "name email");

    if (!auditItem) {
      return res.status(404).json({ message: "Audit item not found." });
    }

    res.status(200).json(auditItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update an audit item (e.g., changing status or adding remarks during verification)
// @route   PUT /api/audit-items/:id
export const updateAuditItem = async (req, res) => {
  try {
    const { status, remarks, verifiedBy, verifiedAt } = req.body;

    const auditItem = await AuditItem.findById(req.params.id);

    if (!auditItem) {
      return res.status(404).json({ message: "Audit item not found." });
    }

    // Update fields if provided
    if (status) auditItem.status = status;
    if (remarks !== undefined) auditItem.remarks = remarks;
    if (verifiedBy) auditItem.verifiedBy = verifiedBy;
    
    // Automatically reset verifiedAt if the status is updated, or use the custom one provided
    auditItem.verifiedAt = verifiedAt || Date.now();

    const updatedAuditItem = await auditItem.save();
    res.status(200).json(updatedAuditItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an audit item record
// @route   DELETE /api/audit-items/:id
export const deleteAuditItem = async (req, res) => {
  try {
    const auditItem = await AuditItem.findByIdAndDelete(req.params.id);

    if (!auditItem) {
      return res.status(404).json({ message: "Audit item not found." });
    }

    res.status(200).json({ message: "Audit item deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};