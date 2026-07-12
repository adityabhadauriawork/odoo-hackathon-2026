import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

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
            </Routes>

        </BrowserRouter>

    );

}