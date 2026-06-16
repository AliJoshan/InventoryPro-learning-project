const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />

          <div className="flex gap-3">
            <div className="h-10 w-24 animate-pulse rounded-xl bg-gray-200" />
            <div className="h-10 w-24 animate-pulse rounded-xl bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        {/* Header */}
        <div>
          <div className="h-10 w-80 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-5 w-64 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="mt-4 h-8 w-32 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>

        {/* Profile Card */}
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="mb-8 h-8 w-52 animate-pulse rounded bg-gray-200" />

          <div className="grid gap-6 md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="mt-3 h-6 w-40 animate-pulse rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
