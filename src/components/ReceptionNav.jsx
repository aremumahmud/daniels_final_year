import "../styles/nav.css";
import { FaHouse } from "react-icons/fa6";
import { MdCalendarToday, MdGroup, MdMessage } from "react-icons/md";
import { HiCreditCard } from "react-icons/hi2";

function ReceptionNav() {
  return (
    <div className="nav">
      <ul>
        <li className="active">
          <FaHouse /> Overview
        </li>
        <li>
          <MdGroup /> Patients
        </li>
        <li>
          <MdCalendarToday /> Schedule
        </li>
        <li>
          <MdMessage /> Message
        </li>
        <li>
          <HiCreditCard /> Transactions
        </li>
      </ul>
    </div>
  );
}

export default ReceptionNav;
