import React from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/Chair.png'
import 'react-calendar/dist/Calendar.css';


const AppoinmentHeader = ({handleDataChange}) => {  
    return (
        <main style = {{height:"600px"}} className ="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
            <Calendar
                onChange={handleDataChange}
                value={new Date()}
            />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppoinmentHeader;