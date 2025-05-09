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

const BridgeVolumeBarChart = (props: any) => {
  const [chartData, setChartData] = useState(props.data);
  
  useEffect(()=>{
    setChartData(props.data);
  }, [props]);
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
      <div className="hidden md:block">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >

            <XAxis
              dataKey="month"
              stroke="#fff" // White text for x-axis
              tick={{
                fontSize: 12,
                fill: "#F3F4F6",
                fontWeight: 300,
              }}
              tickFormatter={(tick) => {
                // Show year only for specific months (e.g., Jan and Dec)
                if (tick === "01/23" || tick === "12/23" || tick === "12/24") {
                  return tick.split("/")[1] === "24" ? "2024" : "2023";
                }
                return tick;
              }}
            />
            <YAxis
              width={50}
              stroke="#fff" // White text for y-axis
              tickCount={9} // Number of ticks (to match the step of 10)
              tick={{
                fontSize: 12,
                fill: "#F3F4F6",
                fontWeight: 300,
              }}
            />
            <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#777', // your desired background color
                  border: '1px solid #3B82F6', // optional border
                  borderRadius: '8px',         // optional rounded corners
                  color: '#F3F4F6'             // text color
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
      <div className="block md:hidden">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 0, left: -40, bottom: 5 }}
          >

            <XAxis
              dataKey="month"
              stroke="#fff" // White text for x-axis
              tick={{
                fontSize: 12,
                fill: "#F3F4F6",
                fontWeight: 300,
              }}
              strokeWidth={2}
              // tickFormatter={(tick) => {
              //   // Show year only for specific months (e.g., Jan and Dec)
              //   if (tick === "01/23" || tick === "12/23" || tick === "12/24") {
              //     return tick.split("/")[1] === "24" ? "2024" : "2023";
              //   }
              //   return tick;
              // }}
            />
            <YAxis
              width={50}
              stroke="#fff" // White text for y-axis
              tickCount={9} // Number of ticks (to match the step of 10)
              tick={false}
              tickLine={false}
              strokeWidth={2}
            />
            <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#777', // your desired background color
                  border: '1px solid #3B82F6', // optional border
                  borderRadius: '8px',         // optional rounded corners
                  color: '#F3F4F6'             // text color
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
    </div>
  );
};

export default BridgeVolumeBarChart;