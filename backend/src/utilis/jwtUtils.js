import jwt from "jsonwebtoken";

/**
 * Generates a JSON Web Token for a user.
 * 
 * @param {String} userId - The user's database ID
 * @param {String} role - The user's role for quick access checking
 * @returns {String} Signed JWT
 */
export const generateToken = (userId, role) => {
    // You should set JWT_SECRET in your .env file
    const secret = process.env.JWT_SECRET || "your_fallback_super_secret_key";
    
    return jwt.sign(
        { id: userId, role: role },
        secret,
        { expiresIn: "30d" } // Token expires in 30 days
    );
};