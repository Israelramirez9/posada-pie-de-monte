import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center border-green-700 rounded-md border-solid border-4 p-4 m-4 bg-green-800 bg-opacity-100 text-white'>
        <div className='h-80'>
          <img className="object-contain h-full rounded-md" src="./media/images/recepcion1.jpg"></img>
        </div>
        <p className='text-justify p-4 font-medium'>
          La Posada Piedemonte nace como una empresa familiar. Nuestro origen se basa en la necesidad de darle un uso adecuado al terreno adicional a nuestra casa, que inicialmente era utilizado para fines de semana y la cual según opiniones de nuestros amigos y visitantes era ideal para una posada. Ubicada al pie del cerro que conforma el Parque Nacional Chorro del Indio, rodeada de vegetación en el sector Altos de los Criollitos, sobre el márgen derecho de la Av. Rotaria de San Cristóbal. La Posada Piedemonte ofrece al visitante un clima de absoluta tranquilidad y sosiego, con vista sobre gran parte de la ciudad y sus alrededores.
        </p>



      </div>
    </>
  )
}

export default Contact