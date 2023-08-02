import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
function Contact() {
  return (
    <>
      <div className='absolute h-screen w-screen -z-10'>
        <img className="object-cover w-full h-full" src="./media/images/fondo_de_pantalla.jpg"></img>
        
      </div>
      
      <Navbar />
      <div className='flex flex-col lg:flex-row items-center justify-center text-center gap-4 bg-orange-400 bg-opacity-10'>
        <div className='w-2/3 px-11 flex flex-col items-center justify-center border-green-700 rounded-md border-solid border-4 p-2 m-4 bg-green-600 bg-opacity-50 text-white'>
          <h1 className='text-2xl mb-4 border-b-2 border-solid border-white p-4 font-bold'>Dirección</h1>
          <p>Av. rotaria urbanizacion altos de los criollitos, San Cristóbal, Táchira, Venezuela</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21107.886046733358!2d-72.21923475414499!3d7.762033283688886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666cb4debb1b3d%3A0xcddb20e80690c9b8!2sPosada%20P%C3%AFedemonte!5e0!3m2!1ses!2sar!4v1690950393327!5m2!1ses!2sar" className='w-full p-4' height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='px-11 flex flex-col items-center justify-center border-green-700 rounded-md border-solid border-4 p-4 m-4 mb-0 bg-green-600 bg-opacity-100 text-white'>
          <h1 className='text-2xl mb-4 border-b-2 border-solid border-white'>Formulario de Contacto</h1>
          <Form />
        </div>
        
      </div>
      <Footer />
      

    </>
  )
}

export default Contact