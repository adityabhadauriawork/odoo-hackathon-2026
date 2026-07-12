import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../services/api";

export default function Signup() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        department: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            setLoading(true);

            await signupUser(form);

            alert("Registration Successful");

            navigate("/");

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Registration Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-[#070B14] flex justify-center items-center px-6">

            <div className="w-full max-w-lg bg-[#111827] rounded-3xl shadow-2xl p-10">

                <h1 className="text-4xl font-black text-center text-white">

                    Create Account

                </h1>

                <p className="text-center text-gray-400 mt-3">

                    Join AssetFlow

                </p>

                {error && (

                    <div className="mt-5 bg-red-500/20 text-red-300 rounded-xl p-3 text-center">

                        {error}

                    </div>

                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 mt-8"
                >

                    <input
                        name="fullName"
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
                        required
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
                        required
                    />

                    <input
                        name="department"
                        placeholder="Department"
                        value={form.department}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-cyan-400 py-4 rounded-xl text-black font-bold hover:bg-cyan-300"
                    >

                        {loading ? "Creating..." : "Create Account"}

                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">

                    Already have an account?

                    {" "}

                    <Link
                        to="/"
                        className="text-cyan-400"
                    >

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}