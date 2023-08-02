import React, { useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import '../styles/galery.css'
const SIZE = 54;
function Galery() {
  const imagesGalery = new Array(SIZE);
  const boxFullImg = useRef()
  const fullImg = useRef()
  for (let i = 0; i < imagesGalery.length; i++) {
    imagesGalery[i] = (i + 1).toString();
  }
  const showImg = (e) => {
    console.log("aqui")
    boxFullImg.current.style.display = "flex";
    fullImg.current.src = e.target.src;
  }
  const closeImg = () => {
    boxFullImg.current.style.display = "none";
  }
  return (
    <>
      <div ref={boxFullImg} className='ful-img'>
        <img src="./media/images/image1.jpg" ref={fullImg} />
        <span onClick={closeImg}>X</span>
      </div>
      <Navbar />
      <div className='flex items-center justify-center'>
        <h1 className='w-2/3 font-bold text-3xl text-center p-4 border-b-2 border-black'>Galería de Imagenes</h1>
      </div>
      <div className='p-4 columns-5 columns-xs gap-x-2 m-4'>

        {
          imagesGalery.map((num, index) => {
            return <img onClick={showImg} className="hover:scale-110 transition-all duration-500 ease-in block outline -outline-offset-8 outline-2 outline-white w-full mb-2" key={index} src={`./media/images/image${num}.jpg`} />
          })

        }
      </div>
      <Footer />
    </>
  )
}

export default Galery