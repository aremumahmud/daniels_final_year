import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Correct data structure for Recharts
const data = [
  { month: "Mon", sales: 12 },
  { month: "Tue", sales: 19 },
  { month: "Wed", sales: 5 },
  { month: "Thur", sales: 8 },
  { month: "Fri", sales: 7 },
  { month: "Sat", sales: 15 },
  { month: "Sun", sales: 18 },
];

const MyBarChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 220, 
        margin: "0",
        padding: "0",
        fontSize: "0.75rem"
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#01F0D0" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
