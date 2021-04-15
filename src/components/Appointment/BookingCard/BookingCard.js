import {React,useState} from 'react';
import AppoinmentFrom from '../AppoinmentFrom/AppoinmentFrom';
import './BookingCard.css'
const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen]= useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className = "col-md-4 mb-3 mt-5">
            <div className="text-center">
                <div class="card-body shadow p-5 mb-5 bg-body rounded">
                    <h5 class="card-title text-color ">{booking.subject}</h5>
                    <h6 class="card-title">{booking.visitingHour}</h6>
                    <small class="card-text">{booking.totalSpace} SPACES AVAILABLE</small><br/>
                    <button onClick={openModal} className = "button-style">Book Appointment</button>
                    <AppoinmentFrom modalIsOpen={modalIsOpen} date = {date} AppoinmentSubject={booking.subject} closeModal = {closeModal}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;