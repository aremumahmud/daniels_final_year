import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Cardiology',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Pediatrics',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Othopedic',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Dermatology',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Neurology',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Psychiatry',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class ChartRadar extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/radar-chart-specified-domain-l68xry';

  render() {
    return (
      <ResponsiveContainer width="100%" height={250} style={ {fontSize: "10px"}}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Consultation" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Avg. Consultation Time" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
