import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

// =========================
// Role Definitions
// =========================

export const ROLES = {
  ADMIN: "Admin",
  ASSET_MANAGER: "Asset Manager",
  DEPARTMENT_HEAD: "Department Head",
  EMPLOYEE: "Employee",
};

// =========================
// Employee ID Generator
// (Temporary)
// Later we'll use utils/generateEmployeeId.js
// =========================

const generateEmployeeId = () => {
  const random = Math.floor(Math.random() * 9999)
    .toString()
    .padStart(4, "0");

  return `EMP${random}`;
};

// =========================
// User Schema
// =========================

const userSchema = new Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      default: generateEmployeeId,
      validate: {
        validator: (value) => /^EMP\d{4}$/.test(value),
        message:
          "Employee ID must be in format EMP0001",
      },
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (value) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Invalid email address",
      },
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.EMPLOYEE,
      required: true,
    },

    department: {
      type: String,
      trim: true,
      default: "General",
      maxlength: 100,
    },

    phone: {
      type: String,
      trim: true,
      validate: {
        validator: (value) =>
          !value || /^[+]?[0-9\s()-]{10,}$/.test(value),
        message: "Invalid phone number",
      },
    },

    profileImage: {
      type: String,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// =========================
// Indexes
// =========================
userSchema.index({ department: 1, role: 1 });

// =========================
// Password Hashing
// =========================

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// =========================
// Compare Password
// =========================

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// =========================
// Remove Sensitive Data
// =========================

userSchema.methods.toJSON = function () {
  const user = this.toObject();

  delete user.password;

  return user;
};

// =========================
// Export Model
// =========================

const User = model("User", userSchema);

export default User;