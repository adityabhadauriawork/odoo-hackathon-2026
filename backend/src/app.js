import express from "express";
import auditRoutes from './routes/audit.routes.js';
import bookingRoutes from './routes/booking.routes.js'; 
import maintenanceRoutes from './routes/maintenance.routes.js';
import notificationRoutes from './routes/notification.routes.js';
import transferRoutes from './routes/transfer.routes.js';
import activityLogRoutes from './routes/activityLog.routes.js';
import allocationRoutes from './routes/allocation.routes.js';
import departmentRoutes from './routes/department.routes.js';
import auditItemRoutes from './routes/auditItem.routes.js';
import categoryRoutes from './routes/category.routes.js';
// 1. Import User routes
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());

// Mount everything
app.use('/api/audits', auditRoutes);
app.use('/api/bookings', bookingRoutes); 
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/api/activity-logs', activityLogRoutes);
app.use('/api/allocations', allocationRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/audit-items', auditItemRoutes);
app.use('/api/categories', categoryRoutes);
// 2. Mount User routes
app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.send("AssetFlow API Running...");
});

export default app;