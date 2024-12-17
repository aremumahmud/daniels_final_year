import { FaEllipsis } from 'react-icons/fa6'
import sample_img from '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
function PatientTile({ image, name , active }) {
    return <div className="patient_tile" style={active?{background:'#01F0D0'}:{}}>
        <div className="patient_info_sect">
            <img src={sample_img} alt="" />
        <div className="info">
            <p className="title">{ name || 'Emily Williams'}</p>
            <p className="subtext">Female, 19</p>
        </div>
        </div>
<FaEllipsis />
        
    </div>
}

export default PatientTile