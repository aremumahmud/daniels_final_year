import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", pv: 2400 },
  { name: "Page B", pv: 1398 },
  { name: "Page C", pv: 9800 },
  { name: "Page D", pv: 3908 },
];

const ChartLine = () => {
  return (
    <div style={{ width: "100%", height: 30 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="pv" stroke="#01F0D0" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;
