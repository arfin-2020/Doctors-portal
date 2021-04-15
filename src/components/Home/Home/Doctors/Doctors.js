import React, {useState,useEffect} from 'react';
import doctor from '../../../../images/doctorvai.png';
import  {faPhone} from '@fortawesome/free-solid-svg-icons'
import DoctorPost from '../../DoctorPost/DoctorPost';

// const DoctorsPost =[
//     {
//         name: "Dr. Caudi",
//         icons: faPhone,
//         phone: "+61 45896523",
//         photo: doctor
//     },
//     {
//         name: "Dr. Caudi",
//         icons: faPhone,
//         phone: "+61 45896523",
//         photo: doctor
//     },
//     {
//         name: "Dr. Caudi",
//         icons: faPhone,
//         phone: "+61 45896523",
//         photo: doctor
//     }
// ]
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="d-flex justify-content-center">
            <div className = 'row w-75'>
            <h1 style={{color:"#0fcfec",textAlign:"center"}}>Our Doctors</h1>
            {
                doctors.map(doctor =><DoctorPost key={doctor._id} doctor={doctor}></DoctorPost>)
            }
        </div>
        </section>
    );
};

export default Doctors;