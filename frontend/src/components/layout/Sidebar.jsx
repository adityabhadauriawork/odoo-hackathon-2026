import { NavLink, useNavigate } from "react-router-dom";
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
    MdPerson,
    MdSettings,
    MdLogout
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
    { name: "Settings", path: "/settings", icon: <MdSettings /> },
];

export default function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");

    };

    return (

        <aside className="w-72 min-h-screen bg-[#0B1120] border-r border-slate-800 flex flex-col justify-between">

            <div>

                <div className="px-8 py-8 border-b border-slate-800">

                    <h1 className="text-4xl font-black">

                        <span className="text-white">Asset</span>

                        <span className="text-cyan-400">Flow</span>

                    </h1>

                    <p className="text-slate-400 text-sm mt-2">

                        Enterprise Asset Management

                    </p>

                </div>

                <div className="mt-8 px-4">

                    {menu.map((item) => (

                        <NavLink

                            key={item.name}

                            to={item.path}

                            className={({ isActive }) =>

                                `flex items-center gap-4 px-5 py-4 rounded-2xl mb-2 transition-all duration-300
                                ${
                                    isActive
                                        ? "bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                }`

                            }

                        >

                            <span className="text-2xl">

                                {item.icon}

                            </span>

                            <span className="text-lg">

                                {item.name}

                            </span>

                        </NavLink>

                    ))}

                </div>

            </div>

            <div className="p-6 border-t border-slate-800">

                <div className="bg-slate-900 rounded-2xl p-4">

                    <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold text-black">

                            A

                        </div>

                        <div>

                            <h3 className="font-bold text-white">

                                Aditya

                            </h3>

                            <p className="text-sm text-slate-400">

                                Administrator

                            </p>

                        </div>

                    </div>

                    <button

                        onClick={handleLogout}

                        className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition text-white font-semibold"

                    >

                        <MdLogout />

                        Logout

                    </button>

                </div>

            </div>

        </aside>

    );

}