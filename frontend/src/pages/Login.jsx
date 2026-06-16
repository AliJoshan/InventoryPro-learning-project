import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
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
      const response = await api.post("/users/login", form);

      const token = response.data.token;

      const success = await login(token);

      if (success) {
        navigate("/profile");
      } else {
        setError("Unable to load profile.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>

        <p className="text-gray-500 mb-8">
          Sign in to continue to InventoryPro.
        </p>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-black">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
