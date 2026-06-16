import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProductTable from "../components/products/ProductTable";
import EditProductModal from "../components/products/EditProductModal";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import DeleteConfirmModal from "../components/products/DeleteConfirmModal";
import ProductTableSkeleton from "../components/products/ProductTableSkeleton";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../api/productApi";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [productForm, setProductForm] = useState({
    title: "",
    price: "",
  });
  const [productSubmitting, setProductSubmitting] = useState(false);
  const [productFormError, setProductFormError] = useState("");
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const [editingProduct, setEditingProduct] = useState(null);

  const [editForm, setEditForm] = useState({
    title: "",
    price: "",
  });

  const [editSubmitting, setEditSubmitting] = useState(false);

  const [editError, setEditError] = useState("");
  const [productToDelete, setProductToDelete] = useState(null);

  const handleProductChange = (e) => {
    setProductForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProductsLoading(true);

        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        setProductsError(
          err.response?.data?.message || "Failed to load products",
        );
      } finally {
        setProductsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async () => {
    if (!productToDelete) return;

    try {
      setDeletingId(productToDelete._id);

      await deleteProduct(productToDelete._id);

      setProducts((prev) =>
        prev.filter((product) => product._id !== productToDelete._id),
      );

      setProductToDelete(null);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete product");
    } finally {
      setDeletingId(null);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);

    setEditForm({
      title: product.title,
      price: product.price,
    });

    setEditError("");
  };

  const handleEditChange = (e) => {
    setEditForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    if (!editingProduct) return;

    try {
      setEditSubmitting(true);

      const updatedProduct = await updateProduct(editingProduct._id, {
        title: editForm.title,
        price: Number(editForm.price),
      });

      setProducts((prev) =>
        prev.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product,
        ),
      );

      setEditingProduct(null);

      setEditError("");
    } catch (err) {
      setEditError(err.response?.data?.message || "Failed to update product");
    } finally {
      setEditSubmitting(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "N/A";

  const handleAddProduct = async (e) => {
    e.preventDefault();

    setProductFormError("");

    try {
      setProductSubmitting(true);

      const newProduct = await createProduct({
        title: productForm.title,
        price: Number(productForm.price),
      });

      // Update UI instantly
      setProducts((prev) => [newProduct, ...prev]);

      // Reset form
      setProductForm({
        title: "",
        price: "",
      });
    } catch (err) {
      setProductFormError(
        err.response?.data?.message || "Failed to create product",
      );
    } finally {
      setProductSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold">InventoryPro</h1>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="rounded-xl border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Home
          </button>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-black px-5 py-2 font-medium text-white transition hover:opacity-90"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 space-y-10">
        {/* HEADER */}
        <div>
          <h2 className="text-4xl font-bold">Welcome back, {user?.name} 👋</h2>
          <p className="mt-2 text-gray-600">
            Here's an overview of your account.
          </p>
        </div>

        {/* ADD PRODUCT SECTION */}
        <section className="rounded-3xl bg-white p-8 shadow-sm border">
          <h3 className="mb-6 text-2xl font-bold">Add Product</h3>

          {productFormError && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
              {productFormError}
            </div>
          )}

          <form
            onSubmit={handleAddProduct}
            className="grid gap-4 md:grid-cols-3"
          >
            <input
              type="text"
              name="title"
              placeholder="Product title"
              value={productForm.title}
              onChange={handleProductChange}
              required
              className="rounded-xl border p-4 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              min="0"
              step="0.01"
              value={productForm.price}
              onChange={handleProductChange}
              required
              className="rounded-xl border p-4 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={productSubmitting}
              className="rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {productSubmitting ? "Adding..." : "Add Product"}
            </button>
          </form>
        </section>

        {/* STATS */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Account Type</p>
            <h3 className="mt-2 text-3xl font-bold capitalize">{user?.role}</h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Member Since</p>
            <h3 className="mt-2 text-2xl font-bold">{joinedDate}</h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Status</p>
            <h3 className="mt-2 text-3xl font-bold text-green-600">Active</h3>
          </div>
        </section>

        {/* PROFILE */}
        <section className="rounded-3xl bg-white p-8 shadow-sm border">
          <h3 className="mb-8 text-2xl font-bold">Profile Information</h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="mt-2 text-lg font-medium">{user?.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="mt-2 text-lg font-medium">{user?.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="mt-2 text-lg font-medium capitalize">
                {user?.role}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">User ID</p>
              <p className="mt-2 break-all text-lg font-medium">{user?._id}</p>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="rounded-3xl bg-white p-8 shadow-sm border">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold">Products</h3>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
              {products.length} items
            </span>
          </div>
          {productsLoading ? (
            <ProductTableSkeleton />
          ) : productsError ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
              {productsError}
            </div>
          ) : products.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
              No products found.
            </div>
          ) : (
            <ProductTable
              products={products}
              onEdit={handleEditClick}
              onDelete={setProductToDelete}
              deletingId={deletingId}
            />
          )}
          <EditProductModal
            editingProduct={editingProduct}
            setEditingProduct={setEditingProduct}
            editForm={editForm}
            setEditForm={setEditForm}
            onSubmit={handleUpdateProduct}
            editSubmitting={editSubmitting}
            editError={editError}
          />
          <DeleteConfirmModal
            product={productToDelete}
            deleting={deletingId === productToDelete?._id}
            onClose={() => setProductToDelete(null)}
            onConfirm={handleDeleteProduct}
          />
        </section>
      </div>
    </div>
  );
};

export default Profile;
