import { FaCaretDown, FaCaretUp } from 'react-icons/fa6'
import '../styles/diag.css'
import DoubleLineChart from './chart'
import OrganStatus from './OrganStatus'


function Diagnostics() {
    return <div className="diagnostics_wrapper">
<p className="title">Diagnosis History</p>
        <br />
        <div className="analytics_bar">
            <div className="charts">
                <div className="info">
                  <p className='info_title'>Blood Pressure</p>
                <div className="time">
                    Last 6 Months 
                    <FaCaretDown />
                </div>   
                </div>
                <br />
                <div className="chart">
                    <DoubleLineChart />
                </div>
               
            </div>
            <div className="analysis">
                <div className="item">
                    <div className="item_head">
                        <div className="ball pink"></div>
                        <p>Systolic</p>
                    </div>
                    <p className="value">160</p>
                    <div className='label'>
                        <FaCaretUp /> Higher than Average
                    </div>
                </div>
                <hr />
                <br />
                 <div className="item">
                    <div className="item_head">
                        <div className="ball purple"></div>
                        <p>Systolic</p>
                    </div>
                    <p className="value">78</p>
                    <div className='label'>
                        <FaCaretDown /> Lower than Average
                    </div>
              </div>
            </div>
        </div>
        <br />
    <OrganStatus />
    </div>
}

export default Diagnostics