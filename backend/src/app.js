import express from "express";
import auditRoutes from './routes/audit.routes.js';
import bookingRoutes from './routes/booking.routes.js'; 
import maintenanceRoutes from './routes/maintenance.routes.js';
import notificationRoutes from './routes/notification.routes.js';
import transferRoutes from './routes/transfer.routes.js';
import activityLogRoutes from './routes/activityLog.routes.js';
// 1. Import the new allocation routes
import allocationRoutes from './routes/allocation.routes.js';

const app = express(); // Initialize 'app' FIRST

app.use(express.json()); // Parse JSON bodies NEXT

// Mount your routes AFTER 'app' is initialized and JSON is parsed
app.use('/api/audits', auditRoutes);
app.use('/api/bookings', bookingRoutes); 
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/api/activity-logs', activityLogRoutes);
// 2. Mount the allocation routes
app.use('/api/allocations', allocationRoutes);

app.get("/", (req, res) => {
    res.send("AssetFlow API Running...");
});

export default app;