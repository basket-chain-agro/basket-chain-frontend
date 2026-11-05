export default function Input({ label, id, error, className = "", ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-sm font-medium text-gray-800"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33C749] ${
          error ? "border-red-400" : "border-gray-200"
        } ${className}`}
        {...props}
      />

      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
