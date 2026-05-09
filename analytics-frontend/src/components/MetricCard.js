import React from "react";

function MetricCard({ name, value, id, onDelete }) {
  return (
    <div style={{
      background: "#121826",
      padding: "15px",
      borderRadius: "10px",
      border: "1px solid #1f2937"
    }}>
      <h4 style={{ color: "#9ca3af", margin: 0 }}>{name}</h4>
      <p style={{ fontSize: "22px" }}>{value}</p>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default MetricCard;