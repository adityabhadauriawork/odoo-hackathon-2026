import Audit from "../models/audit.model.js"; // Adjust path based on your folder structure

// @desc    Create a new audit
// @route   POST /api/audits
export const createAudit = async (req, res) => {
    try {
        const audit = await Audit.create(req.body);
        res.status(201).json({ success: true, data: audit });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Get all audits
// @route   GET /api/audits
export const getAllAudits = async (req, res) => {
    try {
        const audits = await Audit.find()
            .populate("department", "name") // Adjust fields ('name') based on your Department model
            .populate("auditors", "name email") // Adjust fields based on your User model
            .populate("createdBy", "name email");

        res.status(200).json({ success: true, count: audits.length, data: audits });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get a single audit by ID
// @route   GET /api/audits/:id
export const getAuditById = async (req, res) => {
    try {
        const audit = await Audit.findById(req.params.id)
            .populate("department")
            .populate("auditors")
            .populate("createdBy");

        if (!audit) {
            return res.status(404).json({ success: false, message: "Audit not found" });
        }

        res.status(200).json({ success: true, data: audit });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update an audit
// @route   PUT /api/audits/:id
export const updateAudit = async (req, res) => {
    try {
        const audit = await Audit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Returns the updated document and runs schema validation
        );

        if (!audit) {
            return res.status(404).json({ success: false, message: "Audit not found" });
        }

        res.status(200).json({ success: true, data: audit });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// @desc    Delete an audit
// @route   DELETE /api/audits/:id
export const deleteAudit = async (req, res) => {
    try {
        const audit = await Audit.findByIdAndDelete(req.params.id);

        if (!audit) {
            return res.status(404).json({ success: false, message: "Audit not found" });
        }

        res.status(200).json({ success: true, message: "Audit deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};