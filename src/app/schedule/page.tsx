"use client";

import { useState } from "react";
import axios from "axios";

export default function Schedule() {
  const [audience, setAudience] = useState("");
  const [pastData, setPastData] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/campaigns/schedule`, {
        audience,
        pastData
      });
      setRecommendation(response.data.bestTimeToSend);
    } catch (error) {
      console.error("Error fetching scheduling suggestion:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Smart Scheduling</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <input
          type="text"
          placeholder="Audience Type"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="border p-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Past Campaign Data"
          value={pastData}
          onChange={(e) => setPastData(e.target.value)}
          className="border p-2 w-full rounded-md mb-4"
        />
        <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition">
          Get Recommendation
        </button>
      </form>
      {recommendation && <p className="mt-6 text-lg font-semibold text-blue-700">🕒 Best Time: {recommendation}</p>}
    </div>
  );
}