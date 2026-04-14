'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="p-6">
        <h2 className="mb-3 text-xl font-semibold">Something went wrong.</h2>
        <p className="mb-6 text-sm text-gray-600">{error.message}</p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
