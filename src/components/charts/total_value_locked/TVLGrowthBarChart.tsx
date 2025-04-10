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
  { month: "06/22", Positive: 20, Negative: -20 },
  { month: "07/22", Positive: 30, Negative: -30 },
  { month: "08/22", Positive: 10, Negative: -10 },
  { month: "09/22", Positive: 25, Negative: -25 },
  { month: "10/22", Positive: 15, Negative: -15 },
  { month: "11/22", Positive: 20, Negative: -20 },
  { month: "12/22", Positive: 10, Negative: -10 },
  { month: "01/23", Positive: 15, Negative: -15 },
  { month: "02/23", Positive: 20, Negative: -20 },
  { month: "03/23", Positive: 30, Negative: -30 },
  { month: "04/23", Positive: 25, Negative: -25 },
  { month: "05/23", Positive: 15, Negative: -15 },
  { month: "06/23", Positive: 20, Negative: -20 },
  { month: "07/23", Positive: 10, Negative: -10 },
  { month: "08/23", Positive: 15, Negative: -15 },
  { month: "09/23", Positive: 10, Negative: -10 },
  { month: "10/23", Positive: 20, Negative: -20 },
  { month: "11/23", Positive: 15, Negative: -15 },
  { month: "12/23", Positive: 10, Negative: -10 },
  { month: "01/24", Positive: 20, Negative: -20 },
  { month: "02/24", Positive: 15, Negative: -15 },
  { month: "03/24", Positive: 10, Negative: -10 },
  { month: "04/24", Positive: 15, Negative: -15 },
  { month: "05/24", Positive: 20, Negative: -20 },
  { month: "06/24", Positive: 25, Negative: -25 },
  { month: "07/24", Positive: 20, Negative: -20 },
  { month: "08/24", Positive: 15, Negative: -15 },
  { month: "09/24", Positive: 30, Negative: -30 },
  { month: "10/24", Positive: 10, Negative: -10 },
  { month: "11/24", Positive: 20, Negative: -20 },
  { month: "12/24", Positive: 15, Negative: -15 },
];

let smallData = [];
for(var i = chartData.length-1; i > chartData.length-8; i--){
   smallData.push(chartData[i]);
}

const TVLGrowthBarChart = () => {
  return (
    <div
      style={{
        padding: "20px",
        height: "400px",
        color: "#fff", // White text
      }}
    >
      <div className="flex flex-row justify-end items-center">
        <span className="text-[10px] mr-2">TVL in Staking Pools</span>
        <button className="border border-[#5851E8] font-bold py-1 px-2 text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
          M
        </button>
      </div>
      <div className="hidden md:block">
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
              axisLine={false}
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
              verticalAlign="bottom"
              height={36}
              iconType="square"
              wrapperStyle={{ marginTop: 30}} // Margin around the legend
              layout="horizontal" // Ensure horizontal layout for legend items
              formatter={(value) => (
                <span style={{ color: "#fff" }}>{value}</span>
              )}
            />
            <Bar
              dataKey="Positive"
              fill="rgba(149, 159, 255, 0.8)" // Purple for Positive
              barSize={10} // Adjust bar width
            />
            <Bar
              dataKey="Negative"
              fill="rgba(60, 60, 60, 0.8)" // Darker shade for Negative
              barSize={10} // Adjust bar width
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="block md:hidden">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={smallData}
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
              axisLine={false}
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
              verticalAlign="bottom"
              height={36}
              iconType="square"
              wrapperStyle={{ marginTop: 30}} // Margin around the legend
              layout="horizontal" // Ensure horizontal layout for legend items
              formatter={(value) => (
                <span style={{ color: "#fff" }}>{value}</span>
              )}
            />
            <Bar
              dataKey="Positive"
              fill="rgba(149, 159, 255, 0.8)" // Purple for Positive
              barSize={10} // Adjust bar width
            />
            <Bar
              dataKey="Negative"
              fill="rgba(60, 60, 60, 0.8)" // Darker shade for Negative
              barSize={10} // Adjust bar width
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TVLGrowthBarChart;