import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Services() {
  return (
    <>
      <Navbar />
      <div className='w-full flex items-center justify-center'>
        <div className=' w-full flex flex-col items-center justify-center border-black rounded-md  p-4 text-black bg-gradient-to-b from-white via-green-gradient to-white'>
          <h1 className='font-bold mb-2 border-b-2 inline-block w-full text-2xl text-center'>Servicios</h1>
          <div className='h-80  flex justify-center'>
            <img className="lg:w-4/5 lg:object-cover object-contain rounded-md" src="./media/images/image53.jpg"></img>
          </div>
          <p className='text-justify p-4 font-normal'>
            La Posada Piedemonte nace como una empresa familiar. Nuestro origen se basa en la necesidad de darle un uso adecuado al terreno adicional a nuestra casa, que inicialmente era utilizado para fines de semana y la cual según opiniones de nuestros amigos y visitantes era ideal para una posada. Ubicada al pie del cerro que conforma el Parque Nacional Chorro del Indio, rodeada de vegetación en el sector Altos de los Criollitos, sobre el márgen derecho de la Av. Rotaria de San Cristóbal. La Posada Piedemonte ofrece al visitante un clima de absoluta tranquilidad y sosiego, con vista sobre gran parte de la ciudad y sus alrededores.
          </p>
          <h1 className='font-bold mb-2 border-b-2 inline-block w-full text-2xl text-center'>Habitaciones</h1>
          <div className='h-80  flex justify-center'>
            <img className="lg:w-4/5 lg:object-cover object-contain rounded-md" src="./media/images/image7.jpg"></img>
          </div>
          <p className='text-justify p-4 font-normal'>
             Construida en su mayor parte por una estructura tipo colonial de dos niveles, conformada por 15 habitaciones, ubicada sobre una extensión de terreno de 3000m2 aproximadamente, en el sector Altos de los Criollitos sobre el margen derecho de la Av. Rotaria de San Cristóbal.

            Las habitaciones están ubicadas en torno a un corredor colonial, debidamente ventiladas. Todas las habitaciones están dotadas de aire acondicionado silencioso, agua caliente, secador de cabello, nevera ejecutiva, ventilador, camas tipo Queen, matrimoniales e individuales; closet y televisión por cable.
          </p>
          <h1 className='font-bold mb-2 border-b-2 inline-block w-full text-2xl text-center'>Comidas</h1>
          <div className='h-80 flex justify-center'>
            <img className="lg:w-4/5 lg:object-cover object-contain rounded-md" src="./media/images/desayuno.jpg"></img>
          </div>
          <p className='text-justify p-4 font-normal'>
            Ofrecemos al huésped el servicio de desayuno el cual está incluido en el precio de la habitación. Son desayunos típicos de los Andes, pero estamos dispuestos a complacer las exigencias del cliente siempre que se haga el pedido a tiempo.
          </p>
          <h1 className='font-bold mb-2 border-b-2 inline-block w-full text-2xl text-center'>Estacionamiento</h1>
          <div className='h-80 lg:h-auto flex justify-center'>
            <img className="lg:w-4/5 lg:object-cover object-contain rounded-md" src="./media/images/estacionamiento.jpg"></img>
          </div>
          <p className='text-justify p-4 font-normal'>
            Cada habitación tiene un puesto de estacionamiento privado, vigilado y cómodo.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services