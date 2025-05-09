import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const TVLPieChart = (props: any) => {
  const[chartData, setChartData] = useState(props.data);
  useEffect(() => {
    setChartData(props.data);
  }, [props]);
  return (
    <div>
      <div className="flex flex-row justify-center items-top mt-4 md:mt-0 md:mb-16">
        <span className="font-bold text-[16px]">TVL by Liquidity Pool</span>
      </div>
      <div className="hidden md:block">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={730} height={250}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#82ca9d"
              startAngle={450}
              endAngle={90}
              // label={({ name, value }) => `${name}: ${value}`}
            >
              {/* Map over the data to add color for each cell */}
              {chartData.map((entry:any, index:number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={({ payload, label }) => {
              if (payload && payload.length > 0) {
                const { name, value } = payload[0];
                return (
                  <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', padding: '5px', borderRadius: '5px' }}>
                    <span style={{ color: '#fff' }}>
                      <strong>{name}</strong>: {value}
                    </span>
                  </div>
                );
              }
              return null;
            }}
          />
          </PieChart>
        </ResponsiveContainer>  
      </div>
      <div className="block md:hidden">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#82ca9d"
              startAngle={450}
              endAngle={90}
              // label={({ name, value, x, y }) => (
              //   <text
              //     x={x}
              //     y={y}
              //     textAnchor="middle"
              //     dominantBaseline="central"
              //     fill="#fff"
              //     fontSize={12} // 👈 change this number to set the size
              //   >
              //     {`${name}: ${value}`}
              //   </text>
              // )}
            >
              {/* Map over the data to add color for each cell */}
              {chartData.map((entry:any, index:number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              content={({ payload, label }) => {
                if (payload && payload.length > 0) {
                  const { name, value } = payload[0];
                  return (
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', padding: '5px', borderRadius: '5px' }}>
                      <span style={{ color: '#fff' }}>
                        <strong>{name}</strong>: {value}
                      </span>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>  
      </div>     
    </div>
  );
};

export default TVLPieChart;