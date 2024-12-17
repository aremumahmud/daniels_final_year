import { FaCaretDown } from "react-icons/fa6";
import '../styles/organ.css'
import heart from '../assets/HeartBPM.png'
import respiratory from '../assets/respiratory rate.png'
import temp from '../assets/temperature.png'

function OrganStatus(){
    return <div className="organ_status">
        <div className="organ light_blue">
            <div className="image">
                 <img src={respiratory} alt="" />
            </div>
            <div className="info">
                <p className="info_title">
                    Respiratory Rate
                </p>
                <p className="value">
                    20 bpm
                </p>
            </div>
            <p className="small">Normal</p>
         </div>
          <div className="organ light_pink">
            <div className="image">
                 <img src={temp} alt="" />
            </div>
            <div className="info">
                <p className="info_title">
                    Temperature
                </p>
                <p className="value">
                    98.6 F
                </p>
            </div>
            <p className="small">Normal</p>
        </div>
         <div className="organ lightest_pink">
            <div className="image">
                 <img src={heart} alt="" />
            </div>
            <div className="info">
                <p className="info_title">
                    Heart Rate
                </p>
                <p className="value">
                    78 bpm
                </p>
            </div>
            <p className="small"><FaCaretDown />Lower than Average</p>
         </div>
    </div>
}

export default OrganStatus