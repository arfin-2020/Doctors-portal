import React from 'react';

const ServiceDetails = ({service}) => {
   
    return (
        <div className = "col-md-4 text-center">
           <img src={service.image} alt="" height="70px"/> 
           <h5 className="m-3">{service.name}</h5>
           <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi minima id eum cum quod?</p>
        </div>
    );
};

export default ServiceDetails;