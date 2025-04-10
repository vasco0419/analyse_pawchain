'use client'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

const data = [
  { name: 'Locked', value: 400 },
  { name: 'Unlocked', value: 300 },
];

export default class PAWTokensLockedPieChart extends PureComponent {
  render() {
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
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              startAngle={-13}
              endAngle={347}
              paddingAngle={0}
              dataKey="value"
            >
              <Cell fill="url(#gradA)" stroke='none' />
              <Cell fill='#021f6a' stroke='none' />
            </Pie>
          </PieChart>
        </ResponsiveContainer> 
      </div>
    );
  }
}