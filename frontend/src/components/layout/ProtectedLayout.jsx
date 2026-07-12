import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function ProtectedLayout({ children }) {

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <div className="p-8">

                    {children}

                </div>

            </div>

        </div>

    );

}