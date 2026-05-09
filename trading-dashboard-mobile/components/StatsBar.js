import { StyleSheet, Text, View } from "react-native";

export default function StatsBar({ metrics }) {
  const total = metrics.length;

  const avg = total
    ? Math.round(metrics.reduce((a, b) => a + b.value, 0) / total)
    : 0;

  const max = total ? Math.max(...metrics.map((m) => m.value)) : 0;

  return (
    <View style={styles.container}>
      <Box label="Total" value={total} />
      <Box label="Avg" value={avg} />
      <Box label="Max" value={max} />
    </View>
  );
}

const Box = ({ label, value }) => (
  <View style={styles.box}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  box: {
    flex: 1,
    backgroundColor: "#121826",
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  label: { color: "#aaa" },
  value: { color: "#fff", fontSize: 18 },
});
