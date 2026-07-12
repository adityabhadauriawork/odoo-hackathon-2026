import {
    MdSearch,
    MdNotifications,
    MdLightMode
} from "react-icons/md";

export default function Navbar() {

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">

            {/* LEFT */}

            <div>

                <h2 className="text-3xl font-black text-slate-900">

                    Dashboard

                </h2>

                <p className="text-slate-500 text-sm mt-1">

                    {today}

                </p>

            </div>

            {/* CENTER */}

            <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-4 py-3 w-[380px]">

                <MdSearch
                    className="text-slate-500"
                    size={22}
                />

                <input

                    type="text"

                    placeholder="Search assets, employees..."

                    className="bg-transparent outline-none ml-3 w-full"

                />

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-5">

                <button className="relative p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition">

                    <MdNotifications size={24} />

                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

                </button>

                <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition">

                    <MdLightMode size={22} />

                </button>

                <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-4 py-2">

                    <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-black">

                        A

                    </div>

                    <div>

                        <h3 className="font-bold text-slate-800">

                            Aditya

                        </h3>

                        <p className="text-xs text-slate-500">

                            Administrator

                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

}