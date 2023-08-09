import React, { useState, useRef, useEffect } from 'react'
import Navbar from './Navbar'
import { listImages } from './imgListMain'
import { BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi'

function Start() {

  const lisRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const listNode = lisRef.current;
    const imgNode = listNode.querySelectorAll("li>img,li>video")[currentIndex];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex])

  const scrollToImage = (direction) => {
    if (direction === 'left') {
      if (currentIndex == 0) {
        setCurrentIndex(4)
      } else {
        setCurrentIndex(currentIndex - 1)
      }
    } else {
      if (currentIndex == 4) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }
  }
  console.log(currentIndex);
  return (
    <>
      
        <BiSolidLeftArrow onClick={() => scrollToImage('left')} className='absolute top-1/2 left-4 cursor-pointer text-yellow-strong' size={40} />
      
      <BiSolidRightArrow onClick={() => scrollToImage('right')} className='absolute top-1/2 right-4 cursor-pointer text-yellow-strong' size={40} />
      <h1 className='absolute bottom-5 text-green-main bg-white font-bold text-2xl lg:text-4xl p-2 m-2 rounded-lg bg-opacity-70 shadow-md'>SU DESCANSO ES NUESTRA PRIORIDAD...</h1>
      <div className='h-screen w-screen absolute -z-10 overflow-hidden'>

        <ul ref={lisRef} >
          {
            listImages.map((item, index) => {
              if (index == 0) {
                return <li key={index} className='whitespace-nowrap inline'>
                  <video loop autoPlay muted type="video/mp4" src={item.img} className="w-screen h-screen object-cover" />
                </li>
              }
              else {
                return <li key={index} className='whitespace-nowrap inline'>
                  <img src={item.img} className="w-screen h-screen object-cover" />
                </li>
              }
            })
          }
        </ul>

      </div>
      <Navbar />

    </>
  )
}

export default Start