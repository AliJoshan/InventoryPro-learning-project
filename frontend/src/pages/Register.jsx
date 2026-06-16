import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await api.post("/users/register", form);

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>

        <p className="text-gray-500 mb-8">Join InventoryPro and get started.</p>

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 p-3 text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-black py-4 font-semibold text-white hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-black">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
