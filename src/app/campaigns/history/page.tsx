"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Table } from "@/components/ui";

export default function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/campaigns`);
        setCampaigns(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Campaign History</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td>{campaign.name}</td>
              <td>{campaign.message}</td>
              <td>{new Date(campaign.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}