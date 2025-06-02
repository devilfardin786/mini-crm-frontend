"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import RuleBuilder from "@/components/RuleBuilder";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

/** Schema Definitions */
const ruleSchema = z.object({
  field: z.string(),
  operator: z.string(),
  value: z.string(),
});

const campaignSchema = z.object({
  name: z.string().min(3),
  message: z.string().min(5),
  rules: z.array(ruleSchema),
  logic: z.enum(["AND", "OR"]),
});

type CampaignFormData = z.infer<typeof campaignSchema>;

export default function NewCampaign() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<CampaignFormData>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      name: "",
      message: "",
      rules: [],
      logic: "AND",
    },
  });

  const [audienceSize, setAudienceSize] = useState<number | null>(null);

  /** Handle Rules Change */
  const handleRulesChange = (
  newRules: { field: string; operator: string; value: string }[],
  logic: "AND" | "OR"
) => {
  setValue("rules", newRules);
  setValue("logic", logic);
};


  /** Preview Audience */
  const previewAudience = async () => {
    try {
      const { rules, logic } = getValues();
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/campaigns/audience-size`, {

        rules: rules.map((r) => `${r.field} ${r.operator} ${r.value}`),
        logic,
      });
      setAudienceSize(response.data.size);
    } catch (error) {
      console.error("❌ Audience preview failed:", error);
      alert("Failed to preview audience.");
    }
  };

  /** Submit Campaign */
  const onSubmit = async (data: CampaignFormData) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/campaigns`, data);
      alert("🎉 Campaign created successfully!");
    } catch (error) {
      console.error("❌ Failed to create campaign:", error);
      alert("Failed to create campaign.");
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📣 Create New Campaign</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input {...register("name")} placeholder="Enter campaign name" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <Label>Message</Label>
          <Input {...register("message")} placeholder="Enter campaign message" />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <RuleBuilder onRulesChange={handleRulesChange} />

        <Button type="button" onClick={previewAudience} className="mt-2">
          👥 Preview Audience Size
        </Button>

        {audienceSize !== null && (
          <div className="mt-2 text-lg">
            👥 Estimated Audience Size: <strong>{audienceSize}</strong>
          </div>
        )}

        <Button type="submit" className="mt-4">
          🚀 Create Campaign
        </Button>
      </form>
    </Card>
  );
}
