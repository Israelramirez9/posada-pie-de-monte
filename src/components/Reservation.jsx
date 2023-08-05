import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/reservation.css'
function Reservation() {

  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    adults: 0,
    children: 0,
    checkIn: "",
    checkOut: ""
  })

  const handleChange = (event) => {
    setReservationData({ ...reservationData, [event.target.name]: event.target.value })

  }
  return (
    <>
      <Navbar />
      <div className='w-full flex items-center justify-center'>
        <div className=' main-container  w-full md:w-4/5 flex flex-col items-center justify-center rounded-md my-4 text-white'>
          <form className='shadow-2xl border-yellow-soft border-solid border-2 text-gray-600 justify-center items-center bg-white text-center rounded-3xl p-4'>
            <h1 className='font-serif text-2xl  border-b-4 border-yellow-soft border-solid mb-4'>Formulario de Reservación</h1>
            <input name="name" type='text' placeholder='Nombre...' className='input-text block' onChange={handleChange} value={reservationData.name}></input>
            <input name="email" type="email" placeholder='Email...' className='input-text block' onChange={handleChange} value={reservationData.email}></input>
            <div className='lg:inline'>
              <label className=''>Adultos: </label>
              <input value={reservationData.adults} name="adults" type="number" className='w-20 input-text' placeholder='0' min={0} onChange={handleChange}></input>
            </div>
            <div className='lg:inline'>
              <label className='pl-4'>Niños: </label>
              <input value={reservationData.children} name="children" type="number" className='w-20 input-text' placeholder='0' min={0} onChange={handleChange}></input>
            </div>
            <div className='flex items-center justify-center mb-4'>
              <label className='m-4'>Checkin: </label>
              <input value={reservationData.checkIn} name="checkIn" type="date" onChange={handleChange}></input>
            </div>
            <div>
              <label className='m-2'>Checkout: </label>
              <input value={reservationData.checkOut} name="checkOut" type="date" onChange={handleChange}></input>
            </div>
            <button className='text-white mx-auto mt-4 block bg-gray-500 w-fit p-2 rounded-2xl border-2 border-gray-400 border-solid hover:bg-gray-800' >Enviar</button>
          </form>
        </div >

      </div >
      <Footer />
    </>
  )
}

export default Reservation