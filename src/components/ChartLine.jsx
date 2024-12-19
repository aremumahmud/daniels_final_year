import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", pv: 2400, uv: 4000 },
  { name: "Page B", pv: 1398, uv: 3000 },
  { name: "Page C", pv: 5000, uv: 2000 },
  { name: "Page D", pv: 7008, uv: 2780 },
];

const MeasuredChartLine = () => {
  return (
    <div style={{ width: "100%", height: 150, fontSize: "0.75rem", margin: "0", padding: "0" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#01F0D0" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MeasuredChartLine;
