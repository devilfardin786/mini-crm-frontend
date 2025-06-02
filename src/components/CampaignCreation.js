import { useState } from "react";

const conditions = ["Spend > INR 10,000", "Visits < 3", "Inactive for 90 days"];

export default function CampaignCreation({ onSubmit }) {
  const [rules, setRules] = useState([]);
  const [logic, setLogic] = useState("AND");

  const addRule = (rule) => setRules([...rules, rule]);
  const removeRule = (index) => setRules(rules.filter((_, i) => i !== index));

  return (
    <div className="campaign-creator">
      <h2>Create Campaign</h2>
      
      <label>Choose Audience Conditions:</label>
      <select onChange={(e) => addRule(e.target.value)}>
        <option value="">Select Rule</option>
        {conditions.map((cond, index) => (
          <option key={index} value={cond}>{cond}</option>
        ))}
      </select>

      <button onClick={() => setLogic(logic === "AND" ? "OR" : "AND")}>
        Toggle Logic (Current: {logic})
      </button>

      <div>
        <h3>Selected Rules ({logic}):</h3>
        {rules.map((rule, index) => (
          <div key={index}>
            {rule} <button onClick={() => removeRule(index)}>❌ Remove</button>
          </div>
        ))}
      </div>

      <button onClick={() => onSubmit(rules, logic)}>Preview Audience</button>
    </div>
  );
}