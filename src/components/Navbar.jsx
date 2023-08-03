import React, { useState } from 'react'
import { BiX, BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Navbar() {
    let Links = [

        { name: "Inicio", link: "/" },
        { name: "Contacto", link: "/contact" },
        { name: "Servicios", link: "/services" },
        { name: "Reservas", link: "/reservation" },
        { name: "Galería", link: "/galery" }

    ];
    const [open, setOpen] = useState(false);
    return (

        <div className='shadow-md w-full'>
            <div className='lg:flex items-center justify-between bg-white bg-opacity-25 py-4 lg:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <Link to="/">
                        <img src="./media/images/logo-removebg.png"></img>
                    </Link>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-10 cursor-pointer lg:hidden w-7 h-7 flex items-center justify-center'>
                    {
                        open ? <BiX size={28} /> : <BiMenu size={28} />
                    }
                </div>
                {/* linke items */}
                <ul className={`gap-x-4 lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-opacity-0  lg:z-100 z-[100] left-0 lg:w-auto pl-9 pr-9 w-full text-center transition-all duration-500 ease-in ${open ? 'top-28' : 'top-[-800px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li className='lg:my-0 my-7 font-semibold mb-1' key={index}>
                                {/*<a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>*/}
                                <Link to={link.link} className=' block w-full text-gray-800  duration-500 rounded-md border-gray-600 boder-solid border-2 px-2 py-2 bg-slate-400 bg-opacity-70 hover:bg-slate-800 hover:text-white'>{link.name}</Link>
                            </li>))
                    }

                </ul>

            </div>
        </div>




    )
}

export default Navbar