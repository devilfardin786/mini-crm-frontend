"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Log = {
  _id?: string;
  campaignId: string;
  status: string;
  timestamp: string;
};

export default function DeliveryLogs() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/delivery-logs`);
        setLogs(response.data || []);
      } catch (err) {
        console.error("Error fetching delivery logs:", err);
        setError("Failed to load logs.");
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Delivery Logs</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {logs.map((log) => (
          <div key={log._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <p className="text-lg font-semibold">📦 Campaign ID: {log.campaignId}</p>
            <p className={`mt-2 ${log.status === "DELIVERED" ? "text-green-500" : "text-red-500"}`}>
              🚀 Status: {log.status}
            </p>
            <p className="text-gray-500">⏰ Timestamp: {new Date(log.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}