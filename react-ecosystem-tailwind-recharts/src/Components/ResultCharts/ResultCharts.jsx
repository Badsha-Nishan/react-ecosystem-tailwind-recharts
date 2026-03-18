import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const data = [
  { id: 1, name: "Student 1", math: 85, chemistry: 78, physics: 82 },
  { id: 2, name: "Student 2", math: 72, chemistry: 69, physics: 75 },
  { id: 3, name: "Student 3", math: 90, chemistry: 88, physics: 92 },
  { id: 4, name: "Student 4", math: 60, chemistry: 65, physics: 70 },
  { id: 5, name: "Student 5", math: 78, chemistry: 80, physics: 76 },
  { id: 6, name: "Student 6", math: 88, chemistry: 84, physics: 86 },
  { id: 7, name: "Student 7", math: 55, chemistry: 60, physics: 58 },
  { id: 8, name: "Student 8", math: 92, chemistry: 90, physics: 94 },
  { id: 9, name: "Student 9", math: 67, chemistry: 72, physics: 70 },
  { id: 10, name: "Student 10", math: 81, chemistry: 79, physics: 83 },
];

const ResultCharts = () => {
  return (
    <div className="w-11/12 mx-auto mt-6">
      <h1 className="text-center font-bold">10 Students Results with Charts</h1>
      <LineChart width="100%" height={400} data={data}>
        <Line dataKey={"math"}></Line>
        <Line dataKey={"chemistry"} stroke="red"></Line>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default ResultCharts;
