import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
const InfoCard = ({infoData}) => {
    return (
        <div className = "col-md-4 text-white info-card">
            <div className = {`d-flex info-container justify-content-center info-${infoData.background}`}>
                <div className = "margin ms-3">
                    <FontAwesomeIcon className = "icons-style" icon={infoData.icon} />
                </div>
                <div>
                    <h6>{infoData.title}</h6>
                    <small>{infoData.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;