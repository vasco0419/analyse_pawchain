import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer
} from "recharts";
const data = [
  {
    name: 'Total',
    value: 100,
    fill: 'none',
  },
  {
    name: 'Total Staked Tokens',
    value: 75,
    fill: 'url(#gradient)',
  },
];

const RadialBarChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart 
          cx="50%" 
          cy="60%"
          innerRadius="100%"
          outerRadius="100%" 
          barSize={25} 
          data={data}
          startAngle={220}
          endAngle={-40}
        >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7069ec" stopOpacity={1} />
            <stop offset="100%" stopColor="#b4b0f9" stopOpacity={1} />
          </linearGradient>
        </defs>

          <RadialBar
            background
            cornerRadius={15}
            dataKey="value"
            strokeLinecap="round" // Make stroke rounded
          />
          {/* Centered Text */}
          <text
            x="50%" y="50%" // Adjust position manually
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
            fontWeight="bold"
            fill="#FFF"
          >
            Total Staked Tokens
          </text>
          <text
            x="50%" y="56%" // Adjust position manually
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#FFF"
          >
            872,000,000,000,000
          </text>
        </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartExample;
