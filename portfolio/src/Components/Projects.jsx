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


export default function Projects() {
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
        {projectData.map((project, ind)=>{
          return(
        <SwiperSlide  key={ind} className='h-full w-full flex  justify-center items-center overflow-hidden'>
           <div className='group bg-red-00 h-[47vw] sm:h-[44vw] md:h-[40vw] lg:h-[35vw] w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%]  relative rounded-3xl overflow-hidden flex flex-col border-2 border-zinc-950 justify-start items-center'>
           <div className='w-full bg-red-950 cursor-pointer transition duration-300 ease-in-out group-hover:blur-[1px]'>
           <a href={project.project_link} target="_blank"> 
              <img src={project.project_img} alt="" className='transform transition duration-300 hover:scale-105 object-cover'/> 
            </a>
           </div>
            <span className='desc text-xl sm:text-2xl lg:text-3xl absolute top-1 right-1 text-zinc-100 opacity-0 translate-y-[-10px] transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0'>
              <PiShareFatFill/>
            </span>
            <h1 className='desc text-zinc-400  font-semibold text-sm sm:text-xl md:text-2xl lg:text-4xl absolute z-10 bottom-0 bg-zinc-950/50 p-0 md:p-1 lg:p-2 rounded-lg opacity-0 translate-y-[100px] transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0'>{project.project_desc}</h1>
          </div> 
        </SwiperSlide>
         )
        })}
      </Swiper>
    </>
  );
}
