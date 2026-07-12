import express from "express";
import cors from "cors";

// Middlewares
import loggerMiddleware from "./middlewares/logger.middleware.js";
import rateLimiter from "./middlewares/rateLimit.middleware.js";
import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

// Routes
import auditRoutes from "./routes/audit.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import maintenanceRoutes from "./routes/maintenance.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import transferRoutes from "./routes/transfer.routes.js";
import activityLogRoutes from "./routes/activityLog.routes.js";
import allocationRoutes from "./routes/allocation.routes.js";
import departmentRoutes from "./routes/department.routes.js";
import auditItemRoutes from "./routes/auditItem.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

/* ==========================================
   Global Middlewares
========================================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(loggerMiddleware);

app.use(rateLimiter);

/* ==========================================
   Health Check Route
========================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 AssetFlow ERP Backend Running Successfully",
  });
});

/* ==========================================
   API Routes
========================================== */

app.use("/api/users", userRoutes);
app.use("/api/audits", auditRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/activity-logs", activityLogRoutes);
app.use("/api/allocations", allocationRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/audit-items", auditItemRoutes);
app.use("/api/categories", categoryRoutes);

/* ==========================================
   404 Middleware
========================================== */

app.use(notFoundMiddleware);

/* ==========================================
   Global Error Handler
========================================== */

app.use(errorMiddleware);

export default app;