"use client";

import { useState } from "react";
import axios from "axios";

export default function AudienceSegmentation() {
  const [segmentName, setSegmentName] = useState<string>("");
  const [rule, setRule] = useState<string>("");

  /** Fix TypeScript Error: Explicitly define event type */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/audience`, { segmentName, rule });
      alert("🎉 Audience segment saved!");
    } catch (error) {
      console.error("❌ Error creating segment:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Create Audience Segment</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <input
          type="text"
          placeholder="Segment Name"
          value={segmentName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSegmentName(e.target.value)}
          className="border p-2 w-full rounded-md mb-4"
        />
        <textarea
          placeholder="Define Rules (e.g., spend > 10000 AND visits < 3)"
          value={rule}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRule(e.target.value)}
          className="border p-2 w-full rounded-md mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full">
          🚀 Save Segment
        </button>
      </form>
    </div>
  );
}