import React, {useEffect,useState,useContext} from 'react';
import AppointmentsList from '../AppointmentsList/AppointmentsList';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height :'100%'
    }
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments,setappointments] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleDataChange = (date) => {
        setSelectedDate(date)
    //    console.log(selectedDate)
    }
    useEffect(() =>{
        fetch('http://localhost:5000/appointmentsByDate',{
        method:'POST',
        headers: {"content-type": 'application/json'},
        body: JSON.stringify({date:selectedDate,email: loggedInUser.email})
    })
    .then(res=>res.json())
    .then(data =>setappointments(data))
    },[selectedDate])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-4">
                    <Sidebar/>
                </div>
                <div className="col-md-4">
                    <Calendar
                    onChange={handleDataChange}
                    value={new Date()}
                    />
                </div>
                    <div className="col-md-4">
                        <AppointmentsList appointments={appointments}/>
                    </div>
            </div>
        </section>
    );
};

export default Dashboard;