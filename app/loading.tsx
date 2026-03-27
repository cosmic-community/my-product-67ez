export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-primary-100 border-t-primary-600 animate-spin mx-auto" />
        </div>
        <p className="mt-6 text-gray-500 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}