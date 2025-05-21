import React, { useState } from "react";
import { sendSummary } from "../services/api";

function SummaryButton({ todos }) {
  const [status, setStatus] = useState("");

  const handleSummarize = async () => {
    setStatus("Generating...");
    try {
      await sendSummary(todos);
      setStatus("Summary sent to Slack!");
    } catch (err) {
      setStatus("Error sending summary.");
    }
  };

  return (
    <>
      <button onClick={handleSummarize}>Send Summary to Slack</button>
      <p>{status}</p>
    </>
  );
}

export default SummaryButton;
