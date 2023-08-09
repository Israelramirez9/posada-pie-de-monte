import React from 'react'
import { BsFacebook, BsInstagram, BsMailbox } from 'react-icons/bs'

function Footer() {
    return (
        <footer className='lg:flex justify-around items-center text-gray-700 text-center bg-gradient-to-b from-white to-yellow-soft'>
            <div className='flex flex-col justify-center items-center'>
                <p className='p-4 pb-0 border-b-2 border-gray-600 text-xl'>Nuestras Redes: </p>
                <div className='flex gap-8 justify-center p-4'>
                    <a href="https://www.facebook.com/posadapiedemont" target='_blanck'>
                        <div className='rounded-full bg-blue-600 w-12 h-12 flex items-center justify-center'>
                            <BsFacebook size={30} color='white' />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/posada.piedemonte/" target="_blanck">
                        <div className='rounded-full bg-purple-500 w-12 h-12 flex items-center justify-center'>
                            <BsInstagram size={30} color='white' />
                        </div>
                    </a>
                    <a href='mailto:contacto@posadapiedemonte.com' className='cursor-pointer'>
                        <div className='rounded-full bg-white w-12 h-12 flex items-center justify-center'>
                            <BsMailbox size={30} color='black' />
                        </div>
                    </a>
                </div>
                <a href="https://www.posadapiedemonte.com/" target="_blank" className='p-4 text-blue-500 underline'>www.PosadaPieDeMonte.com</a>

            </div>
            <div className='p-4 flex flex-col justify-center items-center'>
                <div className='w-4/5 flex justify-center items-center p-4 bg-white bg-opacity-50 rounded-lg '>
                    <a href="https://www.circuitodelaexcelencia.com/" target="_blank">
                        <img src="./media/images/logo-circuito-la-excelencia-removebg.png"></img>
                    </a>
                </div>
                <a href="https://www.circuitodelaexcelencia.com/" target="_blank" className='p-4 text-blue-500 underline'>www.circuitodelaexcelencia.com/</a>
            </div>
        </footer>
    )
}

export default Footer