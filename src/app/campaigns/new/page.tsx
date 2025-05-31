"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const ruleSchema = z.object({
  field: z.string(),
  operator: z.string(),
  value: z.string(),
});

const campaignSchema = z.object({
  name: z.string().min(3),
  rules: z.array(ruleSchema),
  message: z.string().min(5),
});

export default function NewCampaign() {
  const { register, handleSubmit, control } = useForm({
    resolver: zodResolver(campaignSchema),
  });

  const [rules, setRules] = useState([{ field: "", operator: "", value: "" }]);

  const addRule = () => {
    setRules([...rules, { field: "", operator: "", value: "" }]);
  };

  const onSubmit = async (data: any) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/campaigns`, data);
      alert("Campaign created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create campaign.");
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Campaign</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Name</Label>
        <Input {...register("name")} placeholder="Enter campaign name" />

        <Label>Message</Label>
        <Input {...register("message")} placeholder="Enter campaign message" />

        <Label>Rules</Label>
        {rules.map((rule, index) => (
          <div key={index} className="flex space-x-2">
            <Controller
              name={`rules.${index}.field`}
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <option value="spend">Spend</option>
                  <option value="visits">Visits</option>
                  <option value="inactive">Inactive Days</option>
                </Select>
              )}
            />
            <Controller
              name={`rules.${index}.operator`}
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <option value=">">Greater Than</option>
                  <option value="<">Less Than</option>
                </Select>
              )}
            />
            <Input {...register(`rules.${index}.value`)} placeholder="Value" />
          </div>
        ))}
        <Button type="button" onClick={addRule}>Add Rule</Button>

        <Button type="submit" className="mt-4">Create Campaign</Button>
      </form>
    </Card>
  );
}