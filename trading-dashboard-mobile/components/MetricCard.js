import { Button, StyleSheet, Text, View } from "react-native";

export default function MetricCard({ item, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.value}>{item.value}</Text>
      <Button title="Delete" onPress={() => onDelete(item._id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#121826",
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
  },
  name: { color: "#aaa" },
  value: { color: "#fff", fontSize: 18 },
});
