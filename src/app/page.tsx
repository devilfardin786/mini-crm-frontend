import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Mini CRM Platform</h1>
        <p className="text-lg text-gray-600 mb-6">Customer segmentation and campaign management made simple.</p>
        <Link href="/campaigns">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}