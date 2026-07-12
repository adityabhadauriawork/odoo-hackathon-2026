import User from "../models/user.model.js";

/**
 * Generates a unique sequential Employee ID (e.g., EMP0001, EMP0002)
 * 
 * @returns {Promise<string>} The newly generated Employee ID
 */
export const generateEmployeeId = async () => {
    try {
        // Find the user with the highest employeeId by sorting in descending order
        const lastUser = await User.findOne({}, 'employeeId').sort({ employeeId: -1 });

        // If no users exist in the database yet, start with the first ID
        if (!lastUser || !lastUser.employeeId) {
            return 'EMP0001';
        }

        // Extract the numeric part of the last employee ID (e.g., "0012" from "EMP0012")
        const currentIdString = lastUser.employeeId.replace('EMP', '');
        const currentIdNumber = parseInt(currentIdString, 10);

        // Increment the number by 1
        const nextIdNumber = currentIdNumber + 1;

        // Pad with zeros to ensure it is always at least 4 digits (e.g., "0013")
        const nextIdString = nextIdNumber.toString().padStart(4, '0');

        return `EMP${nextIdString}`;
    } catch (error) {
        console.error("Error generating Employee ID:", error);
        throw new Error("Could not generate Employee ID");
    }
};