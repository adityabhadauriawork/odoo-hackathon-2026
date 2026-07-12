import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

import Dashboard from "../pages/Dashboard/Dashboard";
import Organization from "../pages/Organization/Organization";
import AssetList from "../pages/Assets/AssetList";
import Allocation from "../pages/Allocation/Allocation";
import Booking from "../pages/Booking/Booking";
import Maintenance from "../pages/Maintenance/Maintenance";
import Audit from "../pages/Audit/Audit";
import Reports from "../pages/Reports/Reports";
import Notifications from "../pages/Notifications/Notifications";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function AppRoutes() {

    return (

        <Routes>

            {/* Public Routes */}

            <Route path="/" element={<Landing />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/organization"
                element={
                    <ProtectedRoute>
                        <Organization />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/assets"
                element={
                    <ProtectedRoute>
                        <AssetList />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/allocation"
                element={
                    <ProtectedRoute>
                        <Allocation />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/booking"
                element={
                    <ProtectedRoute>
                        <Booking />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/maintenance"
                element={
                    <ProtectedRoute>
                        <Maintenance />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/audit"
                element={
                    <ProtectedRoute>
                        <Audit />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/reports"
                element={
                    <ProtectedRoute>
                        <Reports />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/notifications"
                element={
                    <ProtectedRoute>
                        <Notifications />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/settings"
                element={
                    <ProtectedRoute>
                        <Settings />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFound />} />

        </Routes>

    );

}