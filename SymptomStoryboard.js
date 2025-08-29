// components/SymptomStoryboard.js

import React, { useState } from "react";

export default function SymptomStoryboard({ onSubmit }) {
  const [symptomInput, setSymptomInput] = useState("");
  const [temperature, setTemperature] = useState(37);
  const [heartRate, setHeartRate] = useState(70);

  // Placeholder for voice input integration
  const handleVoiceInput = () => {
    alert("Voice input feature coming soon!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptomInput.trim()) {
      onSubmit(symptomInput.trim(), { temperature, heartRate });
      setSymptomInput("");
      setTemperature(37);
      setHeartRate(70);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="symptom-form">
      <textarea
        aria-label="Describe symptoms"
        placeholder="Describe your symptoms..."
        value={symptomInput}
        onChange={(e) => setSymptomInput(e.target.value)}
        rows={4}
      />
      <div className="vitals-input">
        <label>
          Temperature (°C):
          <input
            type="number"
            min="30"
            max="45"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Heart Rate (bpm):
          <input
            type="number"
            min="30"
            max="200"
            value={heartRate}
            onChange={(e) => setHeartRate(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button type="button" onClick={handleVoiceInput}>
        Use Voice Input
      </button>
      <button type="submit">Submit Symptoms & Vitals</button>
    </form>
  );
}
