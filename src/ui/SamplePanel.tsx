import React, { useState } from "react";

export default function SamplePanel() {
  const [message, setMessage] = useState("");

  async function runHelloCommand() {
    const result = await window.otter.invoke("otto.sample.hello");
    setMessage(result.message);
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Sample Module Panel</h2>
      <button onClick={runHelloCommand}>Run Hello Command</button>
      {message && <p>Response: {message}</p>}
    </div>
  );
}
