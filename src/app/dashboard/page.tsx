"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default function Dashboard() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/campaigns`)
      .then((response) => setCampaigns(response.data))
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, []);

  const data = {
    labels: campaigns.map((c) => c.name),
    datasets: [
      {
        label: "Sent",
        data: campaigns.map((c) => c.sent),
        borderColor: "green",
        fill: false,
      },
      {
        label: "Failed",
        data: campaigns.map((c) => c.failed),
        borderColor: "red",
        fill: false,
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-6">📊 CRM Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Line data={data} />
      </div>
    </div>
  );
}