import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const chartData = [
  { month: "06/22", inflow: 20, outflow: -20 },
  { month: "07/22", inflow: 30, outflow: -30 },
  { month: "08/22", inflow: 10, outflow: -10 },
  { month: "09/22", inflow: 25, outflow: -25 },
  { month: "10/22", inflow: 15, outflow: -15 },
  { month: "11/22", inflow: 20, outflow: -20 },
  { month: "12/22", inflow: 10, outflow: -10 },
  { month: "01/23", inflow: 15, outflow: -15 },
  { month: "02/23", inflow: 20, outflow: -20 },
  { month: "03/23", inflow: 30, outflow: -30 },
  { month: "04/23", inflow: 25, outflow: -25 },
  { month: "05/23", inflow: 15, outflow: -15 },
  { month: "06/23", inflow: 20, outflow: -20 },
  { month: "07/23", inflow: 10, outflow: -10 },
  { month: "08/23", inflow: 15, outflow: -15 },
  { month: "09/23", inflow: 10, outflow: -10 },
  { month: "10/23", inflow: 20, outflow: -20 },
  { month: "11/23", inflow: 15, outflow: -15 },
  { month: "12/23", inflow: 10, outflow: -10 },
  { month: "01/24", inflow: 20, outflow: -20 },
  { month: "02/24", inflow: 15, outflow: -15 },
  { month: "03/24", inflow: 10, outflow: -10 },
  { month: "04/24", inflow: 15, outflow: -15 },
  { month: "05/24", inflow: 20, outflow: -20 },
  { month: "06/24", inflow: 25, outflow: -25 },
  { month: "07/24", inflow: 20, outflow: -20 },
  { month: "08/24", inflow: 15, outflow: -15 },
  { month: "09/24", inflow: 30, outflow: -30 },
  { month: "10/24", inflow: 10, outflow: -10 },
  { month: "11/24", inflow: 20, outflow: -20 },
  { month: "12/24", inflow: 15, outflow: -15 },
];

const BridgeVolumeBarChart = () => {
  return (
    <div
      style={{
        padding: "20px",
        height: "400px",
        color: "#fff", // White text
      }}
    >
      <p style={{ textAlign: "right", marginBottom: "10px", fontSize: "10px"}}>
        Bridge Volume in Billions
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >

          <XAxis
            dataKey="month"
            stroke="#fff" // White text for x-axis
            tickFormatter={(tick) => {
              // Show year only for specific months (e.g., Jan and Dec)
              if (tick === "01/23" || tick === "12/23" || tick === "12/24") {
                return tick.split("/")[1] === "24" ? "2024" : "2023";
              }
              return tick;
            }}
          />
          <YAxis
            domain={[-40, 40]} // Set y-axis range
            stroke="#fff" // White text for y-axis
            tickCount={9} // Number of ticks (to match the step of 10)
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              color: "#fff",
            }}
          />
          <Legend
            verticalAlign="top"
            height={36}
            iconType="square"
            formatter={(value) => (
              <span style={{ color: "#fff" }}>{value}</span>
            )}
          />
          <Bar
            dataKey="inflow"
            fill="rgba(149, 159, 255, 0.8)" // Purple for inflow
            barSize={10} // Adjust bar width
          />
          <Bar
            dataKey="outflow"
            fill="rgba(60, 60, 60, 0.8)" // Darker shade for outflow
            barSize={10} // Adjust bar width
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BridgeVolumeBarChart;