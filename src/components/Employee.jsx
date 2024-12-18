import { FaEllipsis } from "react-icons/fa6";
import sample_img from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
function Employee({ image, name, active }) {
  return (
    <div
      className="patient_tile p-0"
      style={active ? { background: "#01F0D0" } : {}}
    >
      <div className="patient_info_sect">
        <img src={sample_img} alt="" />
        <div className="info">
          <h3 className="title text-sm">{name || "Emily Williams"}</h3>
          <p className="subtext">Chief Cardiologist</p>
        </div>
      </div>
      <FaEllipsis />
    </div>
  );
}

export default Employee;
