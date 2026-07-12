import express from "express";
import auditRoutes from './routes/audit.routes.js';
import bookingRoutes from './routes/booking.routes.js'; 
import maintenanceRoutes from './routes/maintenance.routes.js';
import notificationRoutes from './routes/notification.routes.js';
// 1. Import the new transfer routes
import transferRoutes from './routes/transfer.routes.js';

const app = express(); // Initialize 'app' FIRST

app.use(express.json()); // Parse JSON bodies NEXT

// Mount your routes AFTER 'app' is initialized and JSON is parsed
app.use('/api/audits', auditRoutes);
app.use('/api/bookings', bookingRoutes); 
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/notifications', notificationRoutes);
// 2. Mount the transfer routes
app.use('/api/transfers', transferRoutes);

app.get("/", (req, res) => {
    res.send("AssetFlow API Running...");
});

export default app;