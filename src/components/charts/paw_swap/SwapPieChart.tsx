import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Sample data with colors
const data = [
  { name: 'Pair1', value: 400, color: '#FF7575' },
  { name: 'Pair2', value: 300, color: '#FFF184' },
  { name: 'Pair3', value: 300, color: '#E0FFAE' },
  { name: 'Pair4', value: 200, color: '#44FF60' },
  { name: 'Pair5', value: 150, color: '#7AF6FF' },
  { name: 'Pair6', value: 200, color: '#B9B9B9' },
];

const SwapPieChart = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center mb-5">
        <span className="font-bold text-[16px]">Swap Volume By Token Pair</span>
      </div>
      <div className="hidden md:block">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={730} height={250}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#82ca9d"
              startAngle={450}
              endAngle={90}
              label={({ name, value }) => `${name}: ${value}`}
            >
              {/* Map over the data to add color for each cell */}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="block md:hidden">
         <ResponsiveContainer width="100%" height={250}>
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                fill="#82ca9d"
                startAngle={450}
                endAngle={90}
                label={({ name, value, x, y }) => (
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#fff"
                    fontSize={12} // 👈 change this number to set the size
                  >
                    {`${name}: ${value}`}
                  </text>
                )}
              >
                {/* Map over the data to add color for each cell */}
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>  
      </div>
    </div>
  );
};

export default SwapPieChart;