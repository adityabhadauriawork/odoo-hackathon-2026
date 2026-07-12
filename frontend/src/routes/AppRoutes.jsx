import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Booking from "../pages/Booking/Booking";
import Maintenance from "../pages/Maintenance/Maintenance";
import Audit from "../pages/Audit/Audit";
import Reports from "../pages/Reports/Reports";
import Notifications from "../pages/Notifications/Notifications";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";

import Allocation from "../pages/Allocation/Allocation";
import Organization from "../pages/Organization/Organization";
import AssetList from "../pages/Assets/AssetList";
export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/organization" element={<Organization />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/assets" element={<AssetList />} />
                <Route
                    path="/allocation"
                    element={<Allocation />}

                />
                <Route
                    path="/booking"
                    element={<Booking />}
                />

                <Route
                    path="/maintenance"
                    element={<Maintenance />}
                />

                <Route
                    path="/audit"
                    element={<Audit />}
                />

                <Route
                    path="/reports"
                    element={<Reports />}
                />

                <Route
                    path="/notifications"
                    element={<Notifications />}
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />
                <Route
                    path="/settings"
                    element={<Settings />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>

        </BrowserRouter>

    );

}