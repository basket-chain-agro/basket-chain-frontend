export default function StateMessage({ status, emptyText, onRetry }) {
  if (status === "loading") {
    return (
      <p className="animate-pulse py-6 text-sm text-gray-500">Loading...</p>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
        <p>Something went wrong. Please try again.</p>
        <button
          onClick={onRetry}
          className="mt-2 rounded-lg bg-[#33C749] px-4 py-2 text-white hover:bg-green-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <p className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
      {emptyText}
    </p>
  );
}
