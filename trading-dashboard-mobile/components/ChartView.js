import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function ChartView({ metrics }) {
  if (!metrics.length) return null;

  const data = {
    labels: metrics.map((m) => m.name),
    datasets: [{ data: metrics.map((m) => m.value) }],
  };

  return (
    <LineChart
      data={data}
      width={Dimensions.get("window").width - 20}
      height={220}
      chartConfig={{
        backgroundColor: "#0a0d14",
        backgroundGradientFrom: "#0a0d14",
        backgroundGradientTo: "#0a0d14",
        color: (opacity = 1) => `rgba(0,255,200,${opacity})`,
        labelColor: () => "#aaa",
      }}
    />
  );
}
