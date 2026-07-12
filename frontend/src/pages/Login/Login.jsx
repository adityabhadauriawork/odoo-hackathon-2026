import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/api";

export default function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
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

            const res = await loginUser(form);

            localStorage.setItem("token", res.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            navigate("/dashboard");

        }

        catch (err) {

            setError(

                err.response?.data?.message ||

                "Login failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-[#070B14] flex items-center justify-center px-6">

            <div className="w-full max-w-md bg-[#111827] rounded-3xl shadow-2xl p-10">

                <h1 className="text-4xl font-black text-white text-center">

                    Welcome Back

                </h1>

                <p className="text-gray-400 text-center mt-3">

                    Login to AssetFlow

                </p>

                {error && (

                    <div className="bg-red-500/20 text-red-300 rounded-xl p-3 mt-6 text-center">

                        {error}

                    </div>

                )}

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >

                    <input

                        type="email"

                        name="email"

                        placeholder="Email"

                        value={form.email}

                        onChange={handleChange}

                        className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none"

                        required

                    />

                    <input

                        type="password"

                        name="password"

                        placeholder="Password"

                        value={form.password}

                        onChange={handleChange}

                        className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 text-white outline-none"

                        required

                    />

                    <button

                        type="submit"

                        disabled={loading}

                        className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:bg-cyan-300 transition"

                    >

                        {

                            loading

                                ? "Logging in..."

                                : "Login"

                        }

                    </button>

                </form>

                <p className="text-gray-400 text-center mt-6">

                    Don't have an account?

                    {" "}

                    <Link

                        to="/signup"

                        className="text-cyan-400"

                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}