// import { FaMicroscope } from 'react-icons/fa6'
import '../styles/patients.css'
import { MdSearch } from 'react-icons/md'
import PatientTile from './patient_tile'

function Patients({ data }) {
    return <div className="patients_wrapper">
        <div className="patients_header">
            <p className="title">Patients</p>
            <MdSearch />
        </div>
        <div className="patients_list">
            <PatientTile />
             <PatientTile />

              <PatientTile />
               <PatientTile />
                 <PatientTile active={true} />
             <PatientTile />

              <PatientTile />
            <PatientTile />
              <PatientTile />
             <PatientTile />

              <PatientTile />
               <PatientTile />
        </div>
    </div>
}

export default Patients