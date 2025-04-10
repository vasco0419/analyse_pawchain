import React, { PureComponent } from "react";
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

const data = [
  { APY: 13 },
  { APY: 5 },
  { APY: 17 },
  { APY: 20 },
  { APY: 24 },
  { APY: 40 },
  { APY: 39 },
  { APY: 30 },
  { APY: 31 },
  { APY: 32 },
  { APY: 5 },
  { APY: 12 },
  { APY: 10 },
  { APY: 14 },
  { APY: 8 },
  { APY: 3 },
  { APY: 5 },
  { APY: 7 },
  { APY: 10 },
  { APY: 14 },
  { APY: 30 },
  { APY: 11 },
  { APY: 4 },
  { APY: 5 },
  { APY: 9 },
  { APY: 10 },
  { APY: 25 },
  { APY: 31 },
  { APY: 14 },
  { APY: 8 },
  { APY: 3 },
  { APY: 5 },
  { APY: 7 },
  { APY: 10 },
  { APY: 24 },
  { APY: 30 },
  { APY: 11 },
  { APY: 4 },
  { APY: 5 },
  { APY: 9 },
  { APY: 10 },
  { APY: 15 },
  { APY: 31 }
];

const BridgeFeeBarChart = () => {
  return (
    <div>
      <p style={{ textAlign: "right", color: "#fff", marginTop: "-10px", fontSize: "10px" }}>
        Bridge Fees in USD(Thousands)
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: 0, bottom: 10 }}>
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="colorAPY" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7069ec" stopOpacity={1} />
              <stop offset="100%" stopColor="#b4b0f9" stopOpacity={1} />
            </linearGradient>
          </defs>

          <XAxis
              dataKey="time"
              height={40}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#F3F4F6",
                fontWeight: 300,
              }}
              tickMargin={20}
              stroke="white"
              strokeWidth={3}  // Set stroke thickness (default is 1)
              angle={-90}
              interval={0}
            />
            <YAxis
              width={30}
              tickLine={true}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
              tickFormatter={(value) => `${value}`} // Add "m" suffix for millions
              stroke="white"
              strokeWidth={3}  // Set stroke thickness (default is 1)
            />
          {/* Areas */}
          <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                border: "none",
                color: "#fff",
              }}
            />
          <Bar type="monotone" dataKey="APY" fill="url(#colorAPY)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BridgeFeeBarChart;
                            
