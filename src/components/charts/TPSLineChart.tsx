import React, { PureComponent } from "react";
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
  { time: "12-24", tvl: 0 },
  { time: "01-25", tvl: 85 },
  { time: "02-25", tvl: 450 },
  { time: "03-25", tvl: 255 },
  { time: "04-25", tvl: 160 },
  { time: "05-25", tvl: 510 },
  { time: "06-25", tvl: 595 },
  { time: "07-25", tvl: 680 },
  { time: "08-25", tvl: 595 },
  { time: "09-25", tvl: 750 },
];

export default class TPSLineChart extends PureComponent {
  render() {
    return (
      <div className="flex items-center flex-col">

        {/* <div className="flex flex-row items-center justify-center w-full gap-3 mb-3 sm:hidden">
          <div className="bg-yellow-300 rounded-full w-10 h-10 flex items-center justify-center">
           
          </div>
          <div className="text-white text-center">
            <span className="block text-sm">TVL Over Time (USD)</span>
            <span className="block text-sm">570,312,950.20 USD</span>
          </div>
        </div> */}
        
        {/* Line Chart */}
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 10,
            }}
            data={data}
          >
            <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" vertical={false} />
            <XAxis
              dataKey="time"
              stroke="#F3F4F61A"
              tick={{
                fontSize: 12,
                fill: "#F3F4F6",
                fontWeight: 300,
              }}
              angle={-60}
              interval={0}
            />
            <YAxis
              stroke="#F3F4F61A"
              tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
              tickFormatter={(value) => `${value} m`} // Add "m" suffix for millions
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#F3F4F61A",
                borderColor: "#616b84",
              }}
              labelStyle={{ color: "#fff" }}
              formatter={(value) => `$${value} m`}
            />
            <Line
              type="monotone"
              dataKey="tvl"
              stroke="#fff"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}