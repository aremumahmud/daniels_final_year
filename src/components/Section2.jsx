import React from "react";
import "../styles/style.css";
import { BoxTitle, Num } from "../components/Extras";
import { FaUserGroup } from "react-icons/fa6";
import DoubleLineChart from "./chart";
import BarChart from "./BarChart";
import MyBarChart from "./BarChart";

function Section2() {
  return (
    <div className="my-box ">
      <BoxTitle title="Total Visitors" button="See details" />
      <Num icon={<FaUserGroup />} num="324,763" rate="+1,526" />
      <div className="my_chart">
        <MyBarChart />
      </div>
    </div>
  );
}

export default Section2;
