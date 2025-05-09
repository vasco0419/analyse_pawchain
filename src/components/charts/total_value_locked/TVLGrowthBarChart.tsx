import React, { useEffect, useState } from "react";
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

const TVLGrowthBarChart = (props:any) => {
  const [chartData, setChartData] = useState(props.data);
  const [smallData, setSmallData] = useState(props.data.slice(7));

  useEffect(() => {
    setChartData(props.data)
    setSmallData(props.data.slice(7));
  }, [props])
  return (
    <div
      style={{
        padding: "20px",
        height: "400px",
        color: "#fff", // White text
      }}
    >
      <div className="flex flex-row justify-end items-center">
        <span className="text-[10px] mr-2">TVL Growth Rate(%)</span>
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
              dataKey="time"
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
                  backgroundColor: '#777777', // your desired background color
                  border: '1px solid #3B82F6', // optional border
                  borderRadius: '8px',         // optional rounded corners
                  color: '#F3F4F6'             // text color
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
              dataKey="positive"
              fill="rgba(149, 159, 255, 0.8)" // Purple for Positive
              barSize={10} // Adjust bar width
            />
            <Bar
              dataKey="negative"
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
              dataKey="time"
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
                backgroundColor: '#777777', // your desired background color
                border: '1px solid #3B82F6', // optional border
                borderRadius: '8px',         // optional rounded corners
                color: '#F3F4F6'             // text color
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
              dataKey="positive"
              fill="rgba(149, 159, 255, 0.8)" // Purple for Positive
              barSize={10} // Adjust bar width
            />
            <Bar
              dataKey="negative"
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