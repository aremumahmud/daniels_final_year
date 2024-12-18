import React from "react";
import "../styles/style.css";
import { BoxTitle, Num } from "../components/Extras";
import { FaBed, FaCalendar, FaScissors, FaUser } from "react-icons/fa6";
import ChartLine from "./LineChart";

const cardData = [
  {
    title: "Patient",
    icon: <FaUser />,
    num: "1879",
    rate: "+115",
    details: "Patients coming increased by 15% in last 7 days",
    graph: <ChartLine />,
  },
  {
    title: "Appointment",
    icon: <FaCalendar />,
    num: "955",
    rate: "+215",
    details: "Increase in data by +10% in last 7 days",
  },
  {
    title: "Bedroom",
    icon: <FaBed />,
    num: "765",
    rate: "+25",
    details: "The available bed Capacity is 1,235",
  },
  {
    title: "Surgery",
    icon: <FaScissors />,
    num: "24",
    rate: "+215",
    details: "There are 2 surgeries scheduled for today",
    graph: (
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
        <div className="my-bg h-2.5 rounded-full dark:my-bg w-14"></div>
      </div>
    ),
  },
];
function Section1() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cardData.map((card, index) => (
        <div key={index} className="my-box">
          <BoxTitle title={card.title} button="See details" />
          <Num icon={card.icon} num={card.num} rate={card.rate} />
          <div className="flex gap-2 items-center">
            {card.graph}

            <p className="text-xs">{card.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section1;
