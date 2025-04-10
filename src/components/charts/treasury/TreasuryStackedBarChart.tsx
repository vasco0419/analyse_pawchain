import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Sample data (you can adjust the values to match your actual data)
const data = [
  { name: "2001", A: 65, B: 55, C: 65, D: 75, E: 26, F: 23 },
  { name: "2002", A: 80, B: 60, C: 70, D: 80, E: 29, F: 22 },
  { name: "2003", A: 85, B: 65, C: 75, D: 85, E: 26, F: 21 },
  { name: "2004", A: 40, B: 20, C: 30, D: 40, E: 30, F: 25 },
  { name: "2005", A: 45, B: 25, C: 35, D: 45, E: 31, F: 24 },
  { name: "2006", A: 40, B: 30, C: 40, D: 50, E: 32, F: 23 },
  { name: "2007", A: 55, B: 35, C: 45, D: 55, E: 33, F: 21 },
  { name: "2008", A: 60, B: 40, C: 50, D: 60, E: 35, F: 29 },
  { name: "2009", A: 65, B: 45, C: 55, D: 65, E: 36, F: 28 },
  { name: "2010", A: 40, B: 20, C: 30, D: 40, E: 30, F: 25 },
  { name: "2011", A: 45, B: 25, C: 35, D: 45, E: 31, F: 24 },
  { name: "2012", A: 40, B: 30, C: 40, D: 50, E: 32, F: 23 },
  { name: "2013", A: 55, B: 35, C: 45, D: 55, E: 33, F: 21 },
  { name: "2014", A: 60, B: 40, C: 50, D: 60, E: 35, F: 29 },
  { name: "2015", A: 65, B: 45, C: 55, D: 65, E: 36, F: 28 },
  { name: "2016", A: 70, B: 50, C: 60, D: 70, E: 38, F: 24 },
  { name: "2017", A: 65, B: 55, C: 65, D: 75, E: 26, F: 23 },
  { name: "2018", A: 80, B: 60, C: 70, D: 80, E: 29, F: 22 },
  { name: "2019", A: 85, B: 65, C: 75, D: 85, E: 26, F: 21 },
  { name: "2020", A: 40, B: 20, C: 30, D: 40, E: 30, F: 25 },
  { name: "2021", A: 45, B: 25, C: 35, D: 45, E: 31, F: 24 },
  { name: "2022", A: 40, B: 30, C: 40, D: 50, E: 32, F: 23 },
  { name: "2023", A: 55, B: 35, C: 45, D: 55, E: 33, F: 21 },
  { name: "2024", A: 60, B: 40, C: 50, D: 60, E: 35, F: 29 },
  { name: "2025", A: 65, B: 45, C: 55, D: 65, E: 36, F: 28 }
];

const CustomBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  let viewHeight = height;
  if(viewHeight < 3) viewHeight = 3;
  return (
    <rect 
      x={x+8} // Adds left margin
      y={y+3} 
      width={width-8} // Adjusts width to simulate right margin
      height={viewHeight-3} 
      fill={fill} 
      rx={5} // Optional: Adds rounded corners
    />
  );
};

const legendItems = [
  { label: 'From Swaps', color: 'bg-blue-600' },
  { label: 'From Treasury LP', color: 'bg-gray-300' },
  { label: 'From Transactions', color: 'bg-blue-800' },
  { label: 'From PAW PAY', color: 'bg-blue-400' },
  { label: 'From Wallet Naming', color: 'bg-white border border-gray-300' },
  { label: 'From PAW API', color: 'bg-blue-500' },
];

const phoneLegendItems = [
  { label: 'Swaps', color: 'bg-blue-600' },
  { label: 'Treasury LP', color: 'bg-gray-300' },
  { label: 'Transactions', color: 'bg-blue-800' },
  { label: 'PAW PAY', color: 'bg-blue-400' },
  { label: 'Wallet Naming', color: 'bg-white border border-gray-300' },
  { label: 'PAW API', color: 'bg-blue-500' },
];

let smallData = [];
for(var i = data.length-1; i >data.length-8; i--){
  smallData.push(data[i]);
}

const TreasuryStackedBarChart = () => {
  return (
    <>
      <div className="flex md:hidden lg:flex flex-row items-center justify-center md:justify-between text-white md:px-8 py-2 rounded-lg w-full">
        {/* Legend Items */}
        <div className="grid grid-cols-2 md:grid-cols-3 justify-end md:justify-center items-center">
          {legendItems.map((item, index) => (
            <div key={index} className="hidden md:flex flex-row items-center">
              {/* Colored Bar */}
              <div className={`w-8 h-3 ${item.color} rounded-sm ml-8`}></div>
              {/* Label */}
              <span className="text-[16px] ml-4">{item.label}</span>
            </div>
          ))}
          {phoneLegendItems.map((item, index) => (
            <div key={index} className="flex md:hidden flex-row justify-start items-center">
              {/* Colored Bar */}
              <div className={`w-6 h-3 ${item.color} rounded-sm ml-4`}></div>
              {/* Label */}
              <span className="text-[14px] ml-1">{item.label}</span>
            </div>
          ))}
        </div>
        {/* 7D LOG Button */}
        <div className="hidden md:flex justify-center items-center">
          <button className="border border-[#5851E8] bg-white font-bold py-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
            7D
          </button>

          <button className="border border-[#5851E8] bg-white font-bold py-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
            LOG
          </button>
        </div>
      </div>
      <div className="lg:hidden md:flex flex-row items-center justify-end text-white px-8 py-2 rounded-lg">
        {/* 7D LOG Button */}
        <div className="flex justify-end md:justify-center items-center">
          <button className="border border-[#5851E8] bg-white font-bold py-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
            7D
          </button>

          <button className="border border-[#5851E8] bg-white font-bold py-1 px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
            LOG
          </button>
        </div>
      </div>
      <div className="col-span-1 hidden md:flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
            {/* Define the gradient for the bars */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1e3a8a" /> {/* Dark blue at the bottom */}
                <stop offset="50%" stopColor="#60a5fa" /> {/* Lighter blue in the middle */}
                <stop offset="100%" stopColor="#0F52FF" /> {/* White at the top */}
              </linearGradient>
              {/* Gradient for the highlighted bar */}
            </defs>

            {/* X-Axis */}
            <XAxis
              dataKey="name"
              tickLine={false}
              tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
              stroke="white"
              strokeWidth={1}
            />

            {/* Y-Axis */}
            <YAxis
              tickLine={false}
              tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
              stroke="white"
              strokeWidth={1}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e3a8a",
                border: "none",
                borderRadius: "5px",
                color: "#ffffff",
              }}
            />

            {/* Stacked Bars */}
            <Bar
              dataKey="A"
              stackId="stack"
              fill={"#0F52FF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="B"
              stackId="stack"
              fill={"#4075FF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="C"
              stackId="stack"
              fill={"#749AFF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="D"
              stackId="stack"
              fill={"#9EB9FF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="E"
              stackId="stack"
              fill={"#D3DFFF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="F"
              stackId="stack"
              fill={"#FFFFFF"}
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-1 flex md:hidden flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={smallData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
            {/* Define the gradient for the bars */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1e3a8a" /> {/* Dark blue at the bottom */}
                <stop offset="50%" stopColor="#60a5fa" /> {/* Lighter blue in the middle */}
                <stop offset="100%" stopColor="#0F52FF" /> {/* White at the top */}
              </linearGradient>
              {/* Gradient for the highlighted bar */}
            </defs>

            {/* X-Axis */}
            <XAxis
              dataKey="name"
              tickLine={false}
              tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
              stroke="white"
              strokeWidth={1}
            />

            {/* Y-Axis */}
            <YAxis
              tickLine={false}
              tick={{ fontSize: 12, fill: "#F3F4F6", fontWeight: 300 }}
              stroke="white"
              strokeWidth={1}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e3a8a",
                border: "none",
                borderRadius: "5px",
                color: "#ffffff",
              }}
            />

            {/* Stacked Bars */}
            <Bar
              dataKey="A"
              stackId="stack"
              fill={"#0F52FF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="B"
              stackId="stack"
              fill={"#4075FF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="C"
              stackId="stack"
              fill={"#749AFF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="D"
              stackId="stack"
              fill={"#9EB9FF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="E"
              stackId="stack"
              fill={"#D3DFFF"}
              shape={<CustomBar />}
            />
            <Bar
              dataKey="F"
              stackId="stack"
              fill={"#FFFFFF"}
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>          
    </>  
  );
};

export default TreasuryStackedBarChart;