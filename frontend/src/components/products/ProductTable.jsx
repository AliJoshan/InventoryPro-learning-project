const ProductTable = ({ products, onEdit, onDelete, deletingId }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200 text-left">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Product
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Price
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Created
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {products.map((product) => (
              <tr
                key={product._id}
                className="transition-colors duration-200 hover:bg-gray-50"
              >
                {/* Product */}
                <td className="px-6 py-5">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {product.title}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      ID: {product._id.slice(-6)}
                    </p>
                  </div>
                </td>

                {/* Price */}
                <td className="px-6 py-5">
                  <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                    ${Number(product.price).toFixed(2)}
                  </span>
                </td>

                {/* Date */}
                <td className="px-6 py-5 text-sm text-gray-500">
                  {new Date(product.createdAt).toLocaleDateString()}
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(product)}
                      className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(product)}
                      disabled={deletingId === product._id}
                      className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === product._id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
