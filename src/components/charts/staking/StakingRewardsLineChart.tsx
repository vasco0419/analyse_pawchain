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
  { time: "01/02", tvl: 0 },
  { time: "02/02", tvl: 85 },
  { time: "03/02", tvl: 120 },
  { time: "04/02", tvl: 180 },
  { time: "05/02", tvl: 200 },
  { time: "06/02", tvl: 220 },
  { time: "07/02", tvl: 250 },
];

export default class StakingRewardsLineChart extends PureComponent {
  render() {
    return (
      <>
        
        {/* Line Chart */}
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 10,
            }}
            data={data}
          >
            <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" vertical={false} horizontal={false} />
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
              tickLine={false}
              tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
              tickFormatter={(value) => `${value}`} // Add "m" suffix for millions
              stroke="white"
              strokeWidth={3}  // Set stroke thickness (default is 1)
            />
            {/* <Tooltip
              contentStyle={{
                backgroundColor: "#F3F4F61A",
                borderColor: "#616b84",
              }}
              labelStyle={{ color: "#fff" }}
              formatter={(value) => `$${value}`}
            /> */}
            <defs>
              <linearGradient id="tvlLineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#746ded" stopOpacity={1} />
                <stop offset="100%" stopColor="#d5d2fe" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey="tvl"
              stroke="url(#tvlLineGradient)"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}