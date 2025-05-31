export default function About() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-center text-blue-600">📖 About Mini CRM</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <p className="text-lg text-gray-700">
          Mini CRM is an advanced **customer segmentation and campaign management** platform designed 
          to help businesses create personalized interactions with their audience.
        </p>
        <h2 className="text-2xl font-bold text-blue-600 mt-6">👤 Created by: Fardin Khan</h2>
        <p className="text-gray-600">A visionary developer passionate about AI, automation, and CRM innovation.</p>
        <h2 className="text-2xl font-bold text-blue-600 mt-6">✨ Key Features</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>✅ AI-powered campaign recommendations</li>
          <li>✅ Smart audience segmentation using dynamic rules</li>
          <li>✅ Real-time analytics dashboard</li>
          <li>✅ Google OAuth authentication for secure access</li>
          <li>✅ Automated campaign delivery with status tracking</li>
        </ul>
      </div>
    </div>
  );
}