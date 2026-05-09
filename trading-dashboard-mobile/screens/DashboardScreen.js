import { useEffect, useState } from "react";
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { io } from "socket.io-client";
import {
    addMetric,
    deleteMetric,
    getMetrics,
    SOCKET_URL,
} from "../services/api";

import ChartView from "../components/ChartView";
import MetricCard from "../components/MetricCard";
import StatsBar from "../components/StatsBar";

const socket = io(SOCKET_URL);

export default function DashboardScreen() {
  const [metrics, setMetrics] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const loadData = async () => {
    const data = await getMetrics();
    setMetrics(data);
  };

  useEffect(() => {
    loadData();

    socket.emit("joinRoom", "dashboard");

    socket.on("metricAdded", (data) => {
      setMetrics((prev) => [...prev, data]);
    });

    socket.on("metricDeleted", (id) => {
      setMetrics((prev) => prev.filter((m) => m._id !== id));
    });

    return () => socket.disconnect();
  }, []);

  const handleAdd = async () => {
    await addMetric({ name, value: Number(value) });
    setName("");
    setValue("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Analytics Dashboard</Text>

      <TextInput
        style={styles.input}
        placeholder="Metric Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Value"
        placeholderTextColor="#888"
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
      />

      <Button title="Add Metric" onPress={handleAdd} />

      <StatsBar metrics={metrics} />

      <FlatList
        data={metrics}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <MetricCard item={item} onDelete={deleteMetric} />
        )}
      />

      <ChartView metrics={metrics} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0d14",
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#121826",
    color: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
