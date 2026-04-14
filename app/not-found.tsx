import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="p-6">
      <h2 className="mb-3 text-xl font-semibold">Page not found.</h2>
      <p className="mb-6 text-sm text-gray-600">
        The page you are looking for does not exist or was moved.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
      >
        Back to home
      </Link>
    </main>
  );
}
