import { useEffect } from "react";

const EditProductModal = ({
  editingProduct,
  setEditingProduct,
  editForm,
  setEditForm,
  onSubmit,
  editSubmitting,
  editError,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && !editSubmitting) {
        setEditingProduct(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [editSubmitting, setEditingProduct]);

  if (!editingProduct) return null;

  const handleChange = (e) => {
    setEditForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6"
      onClick={() => {
        if (!editSubmitting) {
          setEditingProduct(null);
        }
      }}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Edit Product</h2>

          <p className="mt-2 text-sm text-gray-500">
            Update the product information below.
          </p>
        </div>

        {/* Error */}
        {editError && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {editError}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Product Title
            </label>

            <input
              type="text"
              name="title"
              value={editForm.title}
              onChange={handleChange}
              required
              disabled={editSubmitting}
              className="
                w-full rounded-2xl border border-gray-300
                px-4 py-3
                transition
                focus:border-black
                focus:outline-none
                focus:ring-2
                focus:ring-black/10
                disabled:cursor-not-allowed
                disabled:bg-gray-100
              "
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Price
            </label>

            <input
              type="number"
              name="price"
              min="0"
              step="0.01"
              value={editForm.price}
              onChange={handleChange}
              required
              disabled={editSubmitting}
              className="
                w-full rounded-2xl border border-gray-300
                px-4 py-3
                transition
                focus:border-black
                focus:outline-none
                focus:ring-2
                focus:ring-black/10
                disabled:cursor-not-allowed
                disabled:bg-gray-100
              "
            />
          </div>

          {/* Footer */}
          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              disabled={editSubmitting}
              onClick={() => setEditingProduct(null)}
              className="
                rounded-2xl border border-gray-300
                px-5 py-3
                font-medium text-gray-700
                transition
                hover:bg-gray-100
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={editSubmitting}
              className="
                rounded-2xl bg-black
                px-5 py-3
                font-medium text-white
                transition
                hover:opacity-90
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {editSubmitting ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
