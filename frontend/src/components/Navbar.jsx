import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          InventoryPro
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                to="/profile"
                className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-100"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-xl bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-600 transition hover:text-black"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
