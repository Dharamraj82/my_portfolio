import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
const About = () => {
  return (
    <>
    <div className='about mb-5 w-full text-zinc-200 flex flex-col justify-center items-center gap-5 p-3'>
        <div style={{
        boxShadow: `rgba(255, 255, 255, 0.09) 0px 2px 1px,
                    rgba(255, 255, 255, 0.09) 0px 4px 2px,
                    rgba(255, 255, 255, 0.09) 0px 8px 4px,
                    rgba(255, 255, 255, 0.09) 0px 16px 8px,
                    rgba(255, 255, 255, 0.09) 0px 32px 16px`
                    }} className='h-[20.1vw] w-[20.1vw] md:h-[15.1vw] md:w-[15.1vw] rounded-full bg-white'>
            <img className=' ' src="src/assets/About.png" alt="" />
        </div>
            <h1 className='text-xl font-light uppercase'>Dharamraj Prasad Yadav</h1>
            <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold flex flex-col justify-center items-ceter text-center'>
            <h2 className=''>Build, host, and scale</h2>
            <h2>your collaborative website</h2>
            </div>
            <a href="https://drive.google.com/file/d/1QnSEZ_8SjdLV-pw_rmtGIsEcIPO_osRa/view?usp=sharing" target='_blank'>
            <button className='rounded-full'><span className="text className='bg-zinc-200 px-4 py-1 text-base sm:px-6 sm:py-2 sm:text-xl rounded-xl  font-medium gap-1 sm:gap-3 flex text-zinc-950 justify-center items-center text-center">Resume <IoMdArrowForward/></span><span className='text-base sm:text-xl'>Thanks!</span></button>
        </a>
    </div>
    </>
  )
}

export default About