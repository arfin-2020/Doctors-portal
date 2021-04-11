import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
const infosData  = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 Days',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY3 1003, USA',
        icon: faPhone,
        background:'dark'
    },
    {
        title: 'Call Us Now',
        description: '+89556246624',
        icon: faMapMarker,
        background:'primary'
    },
]
const Businessinfo = () => {
    return (
        <section className = "d-flex justify-content-center">
            <div className = 'w-75 row'>
                {
                    infosData.map(infoData =><InfoCard infoData={infoData}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default Businessinfo;