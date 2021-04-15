import React from 'react';
import './Appoinment.css'
import doctor from '../../../images/doctorvai.png';
const Appoinment = () => {
    return (
        <div className = 'Appoinment'>
            <div className="row">
                <div className="col-md-6">
                    <img src={doctor} className = 'img-fluid' alt="" />
                </div>
                <div className="col-md-6 mt-5 z-index text-white">
                    <h5 className="text-primary">Appoinment</h5>
                    <h1>Make an appoinment <br/> Today</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores iusto, optio suscipit consequatur dignissimos quo numquam a sint pariatur? Lorem ipsum dolor sit,
                     amet consectetur adipisicing elit. At aperiam, ad quis expedita odio adipisci?</p>
                     <button className="btn btn-primary">learn More</button>
                     
                </div>
            </div>
        </div>
    );
};

export default Appoinment;