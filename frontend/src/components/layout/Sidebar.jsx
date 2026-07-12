import { NavLink } from "react-router-dom";
import {
    MdDashboard,
    MdBusiness,
    MdInventory,
    MdSwapHoriz,
    MdEvent,
    MdBuild,
    MdFactCheck,
    MdAnalytics,
    MdNotifications,
    MdPerson
} from "react-icons/md";

const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
    { name: "Organization", path: "/organization", icon: <MdBusiness /> },
    { name: "Assets", path: "/assets", icon: <MdInventory /> },
    { name: "Allocation", path: "/allocation", icon: <MdSwapHoriz /> },
    { name: "Booking", path: "/booking", icon: <MdEvent /> },
    { name: "Maintenance", path: "/maintenance", icon: <MdBuild /> },
    { name: "Audit", path: "/audit", icon: <MdFactCheck /> },
    { name: "Reports", path: "/reports", icon: <MdAnalytics /> },
    { name: "Notifications", path: "/notifications", icon: <MdNotifications /> },
    { name: "Profile", path: "/profile", icon: <MdPerson /> },
];

export default function Sidebar() {

    return (

        <div className="w-64 bg-slate-900 text-white min-h-screen">

            <div className="text-2xl font-bold p-6">

                AssetFlow

            </div>

            {menu.map((item) => (

                <NavLink

                    key={item.name}

                    to={item.path}

                    className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800"

                >

                    {item.icon}

                    {item.name}

                </NavLink>

            ))}

        </div>

    );

}