import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Sample data (you can adjust the values to match your actual data)
const data = [
  { name: "24/01", A: 40, B: 20, C: 30},
  { name: "02", A: 45, B: 25, C: 35},
  { name: "03", A: 40, B: 30, C: 40},
  { name: "04", A: 55, B: 35, C: 45},
  { name: "05", A: 60, B: 40, C: 50},
  { name: "06", A: 65, B: 45, C: 55},
  { name: "07", A: 70, B: 50, C: 60},
  { name: "08", A: 65, B: 55, C: 65},
  { name: "09", A: 80, B: 60, C: 70},
  { name: "10", A: 85, B: 65, C: 75},
  { name: "11", A: 40, B: 20, C: 30},
  { name: "12", A: 45, B: 25, C: 35},
  { name: "25/01", A: 40, B: 30, C: 40},
  { name: "02", A: 55, B: 35, C: 45},
  { name: "03", A: 60, B: 40, C: 50},
  { name: "04", A: 65, B: 45, C: 55}
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
  { label: 'Pool1', color: 'bg-[#0F52FF]' },
  { label: 'Pool2', color: 'bg-[#4075FF]' },
  { label: 'Pool3', color: 'bg-[#749AFF]' },
];

let smallData = [];
for(var i = data.length-1; i > data.length-8; i--){
   smallData.push(data[i]);
}

const TVLStackedBarChart = () => {

  return (
    <>
      <div className="flex flex-row items-center justify-between text-white md:px-8 py-2 rounded-lg">
        {/* Legend Items */}
        <div className="grid grid-cols-3 justify-center items-center mt-4 md:mt-0">
          {legendItems.map((item, index) => (
            <div key={index} className="flex flex-row items-center ml-2 md:ml-3">
              {/* Colored Bar */}
              <div className={`w-3 h-3 ${item.color} rounded-sm`}></div>
              {/* Label */}
              <span className="text-[10px] md:text-[16px] ml-1">{item.label}</span>
            </div>
          ))}
        </div>
        {/* M Button */}
        <div className="flex justify-center items-center mt-4 md:mt-0">
          <span className="text-[10px] md:mr-2">TVL in Staking Pools</span>
          <button className="border border-[#5851E8] font-bold py-1 px-2 text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#5851E8] to-[#D6D3FF]">
            M
          </button>
        </div>
      </div>
      <div className="col-span-1 hidden md:flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 5 }} >
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
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-1 flex md:hidden flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={smallData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }} >
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
          </BarChart>
        </ResponsiveContainer>
      </div>          
    </>  
  );
};

export default TVLStackedBarChart;