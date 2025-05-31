import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg py-4 px-6 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Mini CRM</h2>
      <ul className="flex space-x-6">
        <li><Link href="/" className="text-white hover:underline">Home</Link></li>
        <li><Link href="/campaigns" className="text-white hover:underline">Campaigns</Link></li>
        <li><Link href="/schedule" className="text-white hover:underline">Smart Scheduling</Link></li>
        <li><Link href="/guide" className="text-white hover:underline">How It Works</Link></li>
        <li><Link href="/about" className="text-white hover:underline">About</Link></li>
        <li><Link href="/login" className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200">Login</Link></li>
      </ul>
    </nav>
  );
}