export default function Guide() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-center text-purple-600">🛠 How Mini CRM Works</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold text-blue-600">🔹 Step 1: Sign In</h2>
        <p className="text-gray-700">Use **Google OAuth** to log in and access the CRM dashboard securely.</p>
        
        <h2 className="text-2xl font-bold text-blue-600 mt-6">🔹 Step 2: Create an Audience Segment</h2>
        <p className="text-gray-700">Define your target audience using **AND/OR conditions** (e.g., High Spend + Inactive for 90 days).</p>
        
        <h2 className="text-2xl font-bold text-blue-600 mt-6">🔹 Step 3: Launch a Campaign</h2>
        <p className="text-gray-700">Design a marketing campaign and send personalized messages to your audience.</p>
        
        <h2 className="text-2xl font-bold text-blue-600 mt-6">🔹 Step 4: Monitor Performance</h2>
        <p className="text-gray-700">Track **sent & failed messages** and analyze audience engagement.</p>
        
        <h2 className="text-2xl font-bold text-blue-600 mt-6">🔹 Step 5: AI-Powered Insights</h2>
        <p className="text-gray-700">Use **AI suggestions** for message content, scheduling, and audience expansion.</p>
      </div>
    </div>
  );
}