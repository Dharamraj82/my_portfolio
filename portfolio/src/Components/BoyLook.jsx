import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PiShareFatFill } from "react-icons/pi";
import { DataContext } from '../Context/Project_Context';


export default function BoyLook() {
  const projectData = useContext(DataContext)
  // console.log(projectData);
  
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
       
        <SwiperSlide className='h-full w-full flex  justify-center items-center '>
           <div className='group bg-red-00 h-[100vw] justify-start items-center'>
            <img src="src/assets/Look right.png" alt="" />
          </div> 
        </SwiperSlide>
        <SwiperSlide className='h-full w-full flex  justify-center items-center '>
           <div className='group bg-red-00 h-[100vw] justify-start items-center'>
            <img src="src/assets/Look left.png" alt="" />
          </div> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}
