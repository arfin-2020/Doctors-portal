import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DoctorPost = (props) => {
    const {name,icons,phone,photo}  = props.doctor
    return (
        <div className = "col-md-4 text-center">
            <img className="img-fluid"  src = {photo} alt ="" />
            <h6>{name}</h6>
            <div className = "d-flex justify-content-center">
            <FontAwesomeIcon className="text-success" icon={icons} /> <p>{phone}</p>
            </div>
        </div>

    );
};

export default DoctorPost;