import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appoinment from '../Appoinment/Appoinment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import FeaturesServices from '../FeaturesServices/FeaturesServices';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Doctors from './Doctors/Doctors';



const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturesServices/>
            <Appoinment/>
            <Testimonials/>
             <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;