"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Campaign = {
  _id?: string;
  name: string;
  message: string;
  sent?: number;
  failed?: number;
  audienceSize?: number;
  finish?: boolean;  // If API includes this field
};


export default function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/campaigns`);
        setCampaigns(response.data || []);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
        setError("Failed to load campaigns. Please try again.");
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">📢 Campaign History</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600">{campaign.name}</h3>
            <p className="text-gray-600">{campaign.message}</p>
            <div className="mt-4">
              <p className="text-green-500 font-semibold">✅ Sent: {campaign.sent ?? "N/A"}</p>
              <p className="text-red-500 font-semibold">❌ Failed: {campaign.failed ?? "N/A"}</p>
              <p className="text-gray-500 font-semibold">👥 Audience Size: {campaign.audienceSize ?? "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}