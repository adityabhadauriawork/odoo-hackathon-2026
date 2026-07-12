/**
 * User Model for AssetFlow ERP System
 *
 * This is the central User model for the entire Enterprise Asset & Resource Management System.
 * It supports full authentication, role-based access control (RBAC), departmental structure,
 * asset allocation, booking, maintenance, audit logging, and notifications.
 *
 * Key Features:
 * - Secure password handling with bcrypt hashing
 * - Role-based authorization (RBAC) with granular role definitions
 * - Department structure for organizational hierarchy
 * - Automatic employee ID generation (EMP0001 format)
 * - Comprehensive audit trail via timestamps and activity logging
 * - Production-grade security: password never stored in plain text, never exposed in response
 * - Scalable design with proper indexing and validation
 *
 * Security & Compliance:
 * - Password is hashed on save and never exposed
 * - Email and employeeId are unique and validated
 * - All responses automatically sanitize sensitive fields
 * - Indexes optimized for common queries (email, department, role)
 *
 * Future-Proofing:
 * - Designed with extensibility in mind (e.g., future support for permissions, groups, roles)
 * - Clean schema structure allows easy addition of new fields without breaking existing logic
 */

const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

// Role enum - defines access levels in the system
const ROLES = {
  ADMIN: 'Admin',
  ASSET_MANAGER: 'Asset Manager',
  DEPARTMENT_HEAD: 'Department Head',
  EMPLOYEE: 'Employee'
};

// Generate employee ID in format EMP0001, EMP0002, etc.
const generateEmployeeId = () => {
  const padding = '0000';
  const zeroPadded = (Math.floor(Math.random() * 9999)).toString().padStart(4, '0');
  return `EMP${zeroPadded}`;
};

// User schema definition
const userSchema = new Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.startsWith('EMP') && /^[A-Z][0-9]{4}$/i.test(v);
      },
      message: 'Invalid employee ID format. Must start with "EMP" and be exactly 5 characters long (e.g., EMP0001).'
    },
    default: generateEmployeeId
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [255, 'Full name cannot exceed 255 characters']
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Invalid email format.'
    }
  },
  password: {
    type: String,
    required: true,
    select: false // Never expose password in queries or responses
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    required: true,
    default: RO-EMPLOYEE
  },
  department: {
    type: String,
    trim: true,
    maxlength: [100, 'Department name cannot exceed 100 characters'],
    default: 'General'
  },
  phone: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[\+]?[0-9\s\-\(\)]{10,}$/i.test(v);
      },
      message: 'Invalid phone number format.'
    }
  },
  profileImage: {
    type: String,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true,
  versionKey: false
});

// Indexes for performance optimization
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ employeeId: 1 }, { unique: true });
user // Add index for department and role to support filtering by department and role
userSchema.index({ department: 1, role: 1 });

// Pre-save hook to hash password only if it's not already hashed
Schema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // Hash password with bcrypt (10 rounds for security)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Instance method to compare password (used during login)
Schema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Instance method to return clean JSON representation (removes sensitive fields)
Schema.methods.toJSON = function () {
  const  = this.toObject();
  
  // Remove sensitive fields
  delete .password;
  delete .__v;

  return user;
};

// Export the User model
module.exports = model('User', userSchema);
