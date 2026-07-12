import express from "express";
import cors from "cors";

// ===============================
// Global Middlewares
// ===============================

import loggerMiddleware from "./middlewares/logger.middleware.js";
import rateLimiter from "./middlewares/rateLimit.middleware.js";
import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

// ===============================
// Routes
// ===============================

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import roleRoutes from "./routes/role.routes.js";

import auditRoutes from "./routes/audit.routes.js";
import auditItemRoutes from "./routes/auditItem.routes.js";

import bookingRoutes from "./routes/booking.routes.js";

import maintenanceRoutes from "./routes/maintenance.routes.js";

import notificationRoutes from "./routes/notification.routes.js";

import transferRoutes from "./routes/transfer.routes.js";

import activityLogRoutes from "./routes/activityLog.routes.js";

import allocationRoutes from "./routes/allocation.routes.js";

import departmentRoutes from "./routes/department.routes.js";

import categoryRoutes from "./routes/category.routes.js";

const app = express();

/* ==========================================
   Built-in Middlewares
========================================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ==========================================
   Custom Middlewares
========================================== */

app.use(loggerMiddleware);

app.use(rateLimiter);

/* ==========================================
   Health Check
========================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 AssetFlow ERP Backend Running Successfully",
  });
});

/* ==========================================
   Authentication Routes
========================================== */

app.use("/api/auth", authRoutes);

/* ==========================================
   User & Role Management
========================================== */

app.use("/api/users", userRoutes);

app.use("/api/roles", roleRoutes);

/* ==========================================
   Department & Category
========================================== */

app.use("/api/departments", departmentRoutes);

app.use("/api/categories", categoryRoutes);

/* ==========================================
   Booking & Allocation
========================================== */

app.use("/api/bookings", bookingRoutes);

app.use("/api/allocations", allocationRoutes);

/* ==========================================
   Asset Maintenance
========================================== */

app.use("/api/maintenance", maintenanceRoutes);

/* ==========================================
   Asset Transfer
========================================== */

app.use("/api/transfers", transferRoutes);

/* ==========================================
   Notifications
========================================== */

app.use("/api/notifications", notificationRoutes);

/* ==========================================
   Audit
========================================== */

app.use("/api/audits", auditRoutes);

app.use("/api/audit-items", auditItemRoutes);

/* ==========================================
   Activity Logs
========================================== */

app.use("/api/activity-logs", activityLogRoutes);

/* ==========================================
   404 Handler
========================================== */

app.use(notFoundMiddleware);

/* ==========================================
   Global Error Handler
========================================== */

app.use(errorMiddleware);

export default app;