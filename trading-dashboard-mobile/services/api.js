import { Platform } from "react-native";

const BASE_URL =
  Platform.OS === "web" ? "http://localhost:5000" : "http://192.168.1.102:5000"; // your IP

export const getMetrics = async () => {
  const res = await fetch(`${BASE_URL}/metrics`);
  return res.json();
};

export const addMetric = async (data) => {
  return fetch(`${BASE_URL}/metrics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteMetric = async (id) => {
  return fetch(`${BASE_URL}/metrics/${id}`, {
    method: "DELETE",
  });
};

export const SOCKET_URL = BASE_URL;
