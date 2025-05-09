import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BridgeFeeBarChart = (props:any) => {
  const [chartData, setChartData] = useState(props.data);
  useEffect(() => {
    setChartData(props.data);
  }, [props])

  return (
    <div>
      <p style={{ textAlign: "right", color: "#fff", marginTop: "-10px", fontSize: "10px" }}>
        Bridge Fees in USD(Thousands)
      </p>
      <div className="hidden md:block">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 0, right: 10, left: 0, bottom: 10 }}>
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="colorAPY" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7069ec" stopOpacity={1} />
                <stop offset="100%" stopColor="#b4b0f9" stopOpacity={1} />
              </linearGradient>
            </defs>

            <XAxis
                dataKey="month"
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
                width={50}
                tickLine={true}
                axisLine={false}
                tick={{ fontSize: 10, fill: "#F3F4F6", fontWeight: 300 }}
                tickFormatter={(value) => `${value}`} // Add "m" suffix for millions
                stroke="white"
                strokeWidth={3}  // Set stroke thickness (default is 1)
              />
            {/* Areas */}
            <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E293B', // your desired background color
                  border: '1px solid #3B82F6', // optional border
                  borderRadius: '8px',         // optional rounded corners
                  color: '#F3F4F6'             // text color
                }}
              />
            <Bar type="monotone" dataKey="Fee" fill="url(#colorAPY)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="block md:hidden">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 0, right: 10, left: -50, bottom: 10 }}>
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="colorAPY" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7069ec" stopOpacity={1} />
                <stop offset="100%" stopColor="#b4b0f9" stopOpacity={1} />
              </linearGradient>
            </defs>

            <XAxis
                dataKey="month"
                height={40}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#F3F4F6",
                  fontWeight: 300,
                }}
                tickMargin={20}
                stroke="white"
                strokeWidth={2}  // Set stroke thickness (default is 1)
                angle={-90}
                interval={0}
              />
              <YAxis
                width={50}
                tickLine={false}
                tick={false}
                axisLine={true}
                tickFormatter={(value) => `${value}`} // Add "m" suffix for millions
                stroke="white"
                strokeWidth={2}  // Set stroke thickness (default is 1)
              />
            {/* Areas */}
            <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E293B', // your desired background color
                  border: '1px solid #3B82F6', // optional border
                  borderRadius: '8px',         // optional rounded corners
                  color: '#F3F4F6'             // text color
                }}
              />
            <Bar type="monotone" dataKey="Fee" fill="url(#colorAPY)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BridgeFeeBarChart;
                            
