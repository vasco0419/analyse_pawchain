'use client';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PAWTokensLockedPieChart = (props: any) => {
  const [chartData, setChartData] = useState(props.data);

  useEffect(() => {
    setChartData(props.data)
  }, [props])
  return (
    <div>
      <ResponsiveContainer width="100%" height={183}>
        <PieChart>
          <defs>
            <linearGradient id="gradA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6e68ec" />
              <stop offset="100%" stopColor="#b5b1f9" />
            </linearGradient>
          </defs>
          <Pie
            data={chartData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            startAngle={0}
            endAngle={360}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill="url(#gradA)" stroke="none" />
            <Cell fill="#021f6a" stroke="none" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PAWTokensLockedPieChart;