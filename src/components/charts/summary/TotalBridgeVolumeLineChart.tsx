'use client';
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "Mon", tvl: 100 },
  { time: "Tue", tvl: 150 },
  { time: "Wen", tvl: 160 },
  { time: "Thu", tvl: 200 },
  { time: "Fri", tvl: 280 },
  { time: "Sat", tvl: 300 },
  { time: "Sun", tvl: 220 },
];

const TotalBridgeVolumeLineChart = (props: any) => {
  const [chartData, setChartData] = useState(props.data);
  useEffect(()=>{
    setChartData(props.data);
  }, [props]);
  return (
    <ResponsiveContainer width="100%" height={185}>
      <LineChart
        margin={{ top: 5, right: 10, left: 0, bottom: 10 }}
        data={chartData}
      >
        <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" vertical={false} horizontal={false} />
        <XAxis
          dataKey="time"
          stroke="#F3F4F61A"
          height={15}
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 12,
            fill: "#F3F4F6",
            fontWeight: 300,
          }}
          interval={0}
        />
        <YAxis
          stroke="#F3F4F61A"
          width={50}
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 12,
            fill: "#F3F4F6",
            fontWeight: 300,
          }}
          tickFormatter={(value) => `${value}`}
        />
        {/* Uncomment if you want to enable tooltip */}
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1E293B', // your desired background color
            border: '1px solid #3B82F6', // optional border
            borderRadius: '8px',         // optional rounded corners
            color: '#F3F4F6'             // text color
          }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#746ded" stopOpacity={1} />
            <stop offset="100%" stopColor="#d5d2fe" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          dataKey="volume"
          stroke="url(#lineGradient)"
          strokeWidth={1}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TotalBridgeVolumeLineChart;
