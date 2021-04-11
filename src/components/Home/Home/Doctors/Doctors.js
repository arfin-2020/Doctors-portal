import React from 'react';
import doctor from '../../../../images/doctorvai.png';
import  {faPhone} from '@fortawesome/free-solid-svg-icons'
import DoctorPost from '../../DoctorPost/DoctorPost';

const DoctorsPost =[
    {
        name: "Dr. Caudi",
        icons: faPhone,
        phone: "+61 45896523",
        photo: doctor
    },
    {
        name: "Dr. Caudi",
        icons: faPhone,
        phone: "+61 45896523",
        photo: doctor
    },
    {
        name: "Dr. Caudi",
        icons: faPhone,
        phone: "+61 45896523",
        photo: doctor
    }
]
const Doctors = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className = 'row w-75'>
            <h1 style={{color:"#0fcfec",textAlign:"center"}}>Our Doctors</h1>
            {
                DoctorsPost.map(doctor =><DoctorPost doctor={doctor}></DoctorPost>)
            }
        </div>
        </section>
    );
};

export default Doctors;