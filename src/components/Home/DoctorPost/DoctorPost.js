import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DoctorPost = ({doctor}) => {
    return (
        <div className = "col-md-4 col-sm-6 text-center">
            {
                doctor.image ? <img style={{height:'200px'}} src={`data:image/jpeg;base64,${doctor.image.img}`} />
                :
                <img style={{height:'200px'}} className="img-fluid" src = {`http://localhost:5000/${doctor.img}`} alt ="" /> 
            }
            <h6>{doctor.name}</h6>
            <div className = "d-flex justify-content-center">
            {/* <FontAwesomeIcon className="text-success" icon={doctor.icons} /> <p>{doctor.phone}</p> */}
            </div>
        </div>

    );
};

export default DoctorPost;