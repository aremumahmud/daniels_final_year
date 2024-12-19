import React from "react";
import Header from "../components/header";
import "../styles/style.css";
import Employee from "../components/Employee";
import { BoxTitle, Num } from "../components/Extras";
import {
  FaFaceSmile,
  FaPhone,
  FaScissors,
  FaUserDoctor,
} from "react-icons/fa6";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import ReceptionHeader from "../components/ReceptionHeader";
import ChartRadar from "../components/RadarChart";
import MeasuredChartLine from "../components/ChartLine";

function Receptionist() {
  return (
    <div className="p-8">
      <ReceptionHeader />
      <div className="my-box my-4">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <p>Access a summary of key metrics and patient care status</p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Section1 />
          <Section2 />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="my-box">
            <BoxTitle title="Consultations" button="See details" />
            <Num icon={<FaPhone />} num="4740" rate="+310" />
            {/* <OrganStatus /> */}
            <ChartRadar />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="my-box">
              <BoxTitle title="Employee" />
              <Num icon={<FaUserDoctor />} num="183" rate="+15" />
              <Employee />
              <Employee />
              <Employee />
              <button className="p-2 border-2 rounded-md w-full text-center text-sm">
                View All
              </button>
            </div>
            <div className="my-box">
              <BoxTitle title="Satifaction rate" />
              <Num icon={<FaFaceSmile />} num="92%" rate="+0.3%" />
              <MeasuredChartLine />
              <div className="bg-green-100 p-2 rounded-lg mt-2">
                <h3 className="font-bold">Your patient satisfaction is 92%</h3>
                <p className="text-sm">
                  The satisfaction rate has increased, reflectiing patient are
                  very happy with the hospital services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receptionist;
