import React from 'react';
import flouride from '../../../images/Flouride.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/Teeth.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        image:flouride,
    },
    {
        name: 'Cavity Filling',
        image:cavity,
    },
    {
        name: 'Teeth Whitening',
        image:teeth,
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className ='text-center'>
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h1 style = {{color:'#3A4256'}}>Services We Provide</h1>
            </div>
            <div className = "d-flex justify-content-center">
                <div className = 'w-75 row pt-5 mt-5'>
                    {
                    serviceData.map(service=><ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;