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

const PAWTokenPriceLineChart = (props: any) => {
  const [chartData, setChartData] = useState(props.data);
  useEffect(()=> {
    setChartData(props.data);
  }, [props])
  return (
    <>
      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={185}>
        <LineChart
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 10,
          }}
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
            // angle={-60}
            interval={0}
          />
          <YAxis
            stroke="#F3F4F61A"
            width={30}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
            tickFormatter={(value) => `${value}`} // Add "m" suffix for millions
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
            <linearGradient id="ptpLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d5d2fe" stopOpacity={1} />
              <stop offset="100%" stopColor="#746ded" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="price"
            stroke="url(#ptpLineGradient)"
            strokeWidth={1}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default PAWTokenPriceLineChart;
