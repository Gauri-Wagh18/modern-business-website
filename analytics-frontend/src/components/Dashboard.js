import React, { useEffect, useState } from "react";
import MetricCard from "./MetricCard";
import { io } from "socket.io-client";

import {
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis, Tooltip,
  ResponsiveContainer
} from "recharts";

const socket = io("http://localhost:5000");

function Dashboard() {
  const [metrics, setMetrics] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const fetchData = () => {
    fetch("http://localhost:5000/metrics")
      .then(res => res.json())
      .then(data => setMetrics(data));
  };

  useEffect(() => {
    fetchData();

    socket.emit("joinRoom", "dashboard");

    socket.on("metricAdded", (data) => {
      setMetrics(prev => [...prev, data]);
    });

    socket.on("metricDeleted", (id) => {
      setMetrics(prev => prev.filter(item => item._id !== id));
    });

    return () => {
      socket.off("metricAdded");
      socket.off("metricDeleted");
    };
  }, []);

  const handleAdd = async () => {
    await fetch("http://localhost:5000/metrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, value: Number(value) })
    });

    setName("");
    setValue("");
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/metrics/${id}`, {
      method: "DELETE"
    });
  };

  // calculations
  const avg = metrics.length
    ? Math.round(metrics.reduce((a, b) => a + b.value, 0) / metrics.length)
    : 0;

  const max = metrics.length
    ? Math.max(...metrics.map(m => m.value))
    : 0;

  return (
    <div>

      {/* FORM */}
      <div>
        <input
          placeholder="Metric Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* TOP STATS */}
      <div className="top-bar">
        <div className="stat-box">
          <h4>Total</h4>
          <p>{metrics.length}</p>
        </div>

        <div className="stat-box">
          <h4>Average</h4>
          <p>{avg}</p>
        </div>

        <div className="stat-box">
          <h4>Max</h4>
          <p>{max}</p>
        </div>
      </div>

      {/* CARDS */}
      <div className="card-grid">
        {metrics.map(item => (
          <MetricCard
            key={item._id}
            id={item._id}
            name={item.name}
            value={item.value}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* BAR CHART */}
      <div style={{ width: "80%", height: 300, margin: "40px auto" }}>
        <h3>Bar Chart</h3>
        <ResponsiveContainer>
          <BarChart data={metrics}>
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Bar dataKey="value" fill="#00c896" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LINE CHART */}
      <div style={{ width: "80%", height: 300, margin: "40px auto" }}>
        <h3>Trend</h3>
        <ResponsiveContainer>
          <LineChart data={metrics}>
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00ffcc"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Dashboard;