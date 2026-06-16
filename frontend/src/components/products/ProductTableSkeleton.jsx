const ProductTableSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">
              Title
            </th>

            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">
              Price
            </th>

            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">
              Created
            </th>

            <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="border-t border-gray-100 animate-pulse">
              <td className="px-6 py-5">
                <div className="h-5 w-40 rounded bg-gray-200" />
              </td>

              <td className="px-6 py-5">
                <div className="h-5 w-20 rounded bg-gray-200" />
              </td>

              <td className="px-6 py-5">
                <div className="h-5 w-28 rounded bg-gray-200" />
              </td>

              <td className="px-6 py-5">
                <div className="flex gap-3">
                  <div className="h-10 w-20 rounded-xl bg-gray-200" />

                  <div className="h-10 w-24 rounded-xl bg-gray-200" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTableSkeleton;
