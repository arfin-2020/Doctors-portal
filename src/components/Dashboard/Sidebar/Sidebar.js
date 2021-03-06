import React , {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers,faUser } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isDoctor,setIsDoctor] = useState(false);

    useEffect(() =>{
        fetch('https://pure-ravine-43373.herokuapp.com/isDoctor',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: loggedInUser.email })
        })
        .then(res =>res.json())
        .then(data =>setIsDoctor(data))
    },[])
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/appointment/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                
                <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/appointment" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
              
                <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/appointment/allpatients" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>

                <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/doctor/prescriptions" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>

                <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/addDoctor" className="text-white" >
                        <FontAwesomeIcon icon={faUser} /><span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/doctor/setting" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /><span>Setting</span>
                     </Link>
                </li>
            </ul> 
            <div>
                <Link  to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;