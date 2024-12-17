import "../styles/profile.css";
import sample from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";
import { MdCalendarToday } from "react-icons/md";
import { FaPhone, FaShield, FaVenus } from "react-icons/fa6";

function Profile({ dob, gender, contact, emergency, insurance }) {
  return (
    <div className="profile_wrapper">
      <div className="patient_view">
        <img src={sample} alt="" />
        <p>Jessica Taylor</p>
      </div>
      <ul className="info_list">
        <li>
          <div className="icon">
            <MdCalendarToday />
          </div>
          <div className="info_info">
            <p className="title">Date Of Birth</p>
            <p className="sub_title">{dob}</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <FaVenus />
          </div>{" "}
          <div className="info_info">
            <p className="title">Gender</p>
            <p className="sub_title">{gender}</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <FaPhone />
          </div>{" "}
          <div className="info_info">
            <p className="title">Contact Info.</p>
            <p className="sub_title">{contact}</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <FaPhone />
          </div>{" "}
          <div className="info_info">
            <p className="title">Emergency Contacts</p>
            <p className="sub_title">{emergency}</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <FaShield />
          </div>{" "}
          <div className="info_info">
            <p className="title">Insurance Provider</p>
            <p className="sub_title">{insurance}</p>
          </div>
        </li>
          </ul>
          <div className="btn_wrap">
              <p>Show All Information</p>
          </div>
    </div>
  );
}

export default Profile;
