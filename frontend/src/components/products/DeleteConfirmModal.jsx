const DeleteConfirmModal = ({ product, onClose, onConfirm, deleting }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={() => {
        if (!deleting) {
          onClose();
        }
      }}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Delete Product</h2>

          <p className="mt-3 text-gray-600">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-gray-900">
              "{product.title}"
            </span>
            ?
          </p>

          <p className="mt-2 text-sm text-red-600">
            This action cannot be undone.
          </p>
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            disabled={deleting}
            onClick={onClose}
            className="
              rounded-2xl border border-gray-300
              px-5 py-3
              font-medium text-gray-700
              transition
              hover:bg-gray-100
              disabled:opacity-50
            "
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={deleting}
            onClick={onConfirm}
            className="
              rounded-2xl bg-red-600
              px-5 py-3
              font-medium text-white
              transition
              hover:bg-red-700
              disabled:opacity-50
            "
          >
            {deleting ? "Deleting..." : "Delete Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
