"use client";

import { useState } from "react";

type Rule = {
  field: string;
  operator: string;
  value: string;
};

type Props = {
  onRulesChange: (rules: Rule[], logic: "AND" | "OR") => void;
};

const RuleBuilder = ({ onRulesChange }: Props) => {
  const [rules, setRules] = useState<Rule[]>([
    { field: "spend", operator: ">", value: "10000" },
  ]);
  const [logic, setLogic] = useState<"AND" | "OR">("AND");

  const handleRuleChange = (index: number, key: keyof Rule, value: string) => {
    const newRules = [...rules];
    newRules[index][key] = value;
    setRules(newRules);
    onRulesChange(newRules, logic);
  };

  const addRule = () => {
    setRules([...rules, { field: "spend", operator: ">", value: "" }]);
  };

  const removeRule = (index: number) => {
    const newRules = rules.filter((_, i) => i !== index);
    setRules(newRules);
    onRulesChange(newRules, logic);
  };

  const handleLogicChange = (newLogic: "AND" | "OR") => {
    setLogic(newLogic);
    onRulesChange(rules, newLogic);
  };

  return (
    <div className="p-4 border rounded-lg space-y-4">
      <h2 className="text-lg font-semibold">📋 Build Audience Rules</h2>

      {rules.map((rule, index) => (
        <div key={index} className="flex gap-2 items-center">
          <select
            value={rule.field}
            onChange={(e) => handleRuleChange(index, "field", e.target.value)}
            className="border p-1 rounded"
          >
            <option value="spend">Spend</option>
            <option value="visits">Visits</option>
            <option value="inactive">Inactive for (days)</option>
          </select>

          <select
            value={rule.operator}
            onChange={(e) => handleRuleChange(index, "operator", e.target.value)}
            className="border p-1 rounded"
          >
            <option value=">">&gt;</option>
            <option value="<">&lt;</option>
            <option value="=">=</option>
          </select>

          <input
            type="text"
            value={rule.value}
            onChange={(e) => handleRuleChange(index, "value", e.target.value)}
            className="border p-1 rounded w-24"
          />

          <button
            onClick={() => removeRule(index)}
            className="text-red-500 hover:underline"
          >
            ✖
          </button>
        </div>
      ))}

      <div className="flex gap-2">
        <button
          onClick={addRule}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          ➕ Add Rule
        </button>

        <select
          value={logic}
          onChange={(e) => handleLogicChange(e.target.value as "AND" | "OR")}
          className="border p-1 rounded"
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </div>
    </div>
  );
};

export default RuleBuilder;
