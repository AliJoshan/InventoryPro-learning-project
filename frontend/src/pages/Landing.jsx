import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    title: "Inventory Tracking",
    description:
      "Keep track of all your products with an intuitive and organized system.",
  },
  {
    title: "Fast Management",
    description: "Add, edit, and update inventory efficiently from one place.",
  },
  {
    title: "Secure Access",
    description: "Authentication and protected routes keep your data safe.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-6 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
          Product Inventory Management
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl">
          Manage your inventory beautifully.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Organize products, streamline operations, and build a modern inventory
          workflow with a fast and secure platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/register"
            className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:opacity-90"
          >
            Start Free
          </Link>

          <Link
            to="/login"
            className="rounded-full border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-50 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>

              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] bg-black px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to simplify inventory management?
          </h2>

          <p className="mt-4 text-gray-300">
            Create your account and start managing products today.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-100"
          >
            Create Account
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
