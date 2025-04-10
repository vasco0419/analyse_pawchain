import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'SOL', value: 400, color: '#FFE76140' },
  { name: 'BTC', value: 300, color: '#FFFFFF1A' },
  { name: 'ETH', value: 300, color: '#801b4b' },
  { name: 'USDC', value: 200, color: '#0048FF1A' },
  { name: 'BNB', value: 200, color: '#FFFF0040' },
  { name: 'PAXG', value: 200, color: '#FFFF0040' },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, payload, percent, value } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const fillColor = payload.payload.color;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fillColor}
        stroke='#FFF'
      />
    </g>
  );
};

export default class TreasuryPieChartMobile extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_:any, index: any) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const innerRadius = 80;
    const outerRadius = 100;
    const totalValue = data.reduce((acc, item) => acc + item.value, 0);
    const chartHeight = 300;

    return (
      <div >
        <ResponsiveContainer width="100%" height={chartHeight}>
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              onMouseEnter={this.onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
          <div className="grid-cols-2 gap-2 p-4 mb-4 grid sm:hidden">
            {data.map((entry, index) => (
              <div
                key={index}
                className="flex justify-center items-center text-white text-[12px] font-semibold rounded-[10px] px-4 py-2"
                style={{ backgroundColor: entry.color }}
              >
                <span>{`${((entry.value / totalValue) * 100).toFixed(2)}% ${entry.name}`}</span>
              </div>
            ))}
          </div>
      </div>
    );
  }
}