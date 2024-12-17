import { FaEllipsis, FaEllipsisVertical, FaGear } from "react-icons/fa6"
import '../styles/user_bar.css'
import user_img from  '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'

function UserBar() {
    return <div className="user_bar">
        <div className="info">
            <img src={user_img} alt="" />
        <div className="user_information">
            <p className="title">Dr. Jose Simmons</p>
            <p className="subtext">General Practitioner</p>
        </div>
        </div>
        <div className="line"></div>
        <div className="user_action">
            <FaGear />
            <FaEllipsisVertical />
        </div>
       
    </div>
}

export default UserBar