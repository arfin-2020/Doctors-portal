import React, {useState,useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import DoctorPost from '../../DoctorPost/DoctorPost';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://pure-ravine-43373.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="d-flex justify-content-center">
            <div className = 'row w-75'>
            <h1 style={{color:"#0fcfec",textAlign:"center"}}>Our Doctors</h1>
            {
                doctors.length === 0 && <p style = {{textAlign:"center"}}> <Spinner animation="border" role="status">
                    <span className="sr-only"> Loading...</span>
                    </Spinner></p>
                }
            {
                doctors.map(doctor =><DoctorPost key={doctor._id} doctor={doctor}></DoctorPost>)
            }
        </div>
        </section>
    );
};

export default Doctors;