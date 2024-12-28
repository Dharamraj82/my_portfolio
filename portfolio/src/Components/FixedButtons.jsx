import React, { useState } from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { motion } from "framer-motion";

const FixedButtons = () => {

  const [menu, setMenu] = useState(false)
  const showMenu = () =>{
  
      setMenu(!menu);
    
  }
  return (
    <>
       <div className='top-0 right-0 w-[300px] fixed z-10'>
       <div className= 'relative flex flex-col  gap-2'>
        <div className='flex justify-end items-center lg:pr-24 lg:pt-10 pr-6 pt-5 sm:pr-16 sm:pt-7 gap-2'>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        className='bg-black sm:px-6 sm:py-3 px-5 py-2 text-white font-semibold rounded-full border-4 border-zinc-50 cursor-pointer'>Hire Me</motion.button>
        <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5}} 
        onClick={()=>{
          showMenu();
        }} className='cursor-pointer text-gray-700 text-4xl sm:text-5xl'><CgMenuGridO/></motion.span>
        </div>
        <div className=' flex justify-end items-center pr-5 sm:pr-10 md:pr-15 lg:pr-20'>

        {menu && (
         <div className='uppercase text-zinc-500 rounded-xl flex items-end flex-col text-xl md:text-2xl lg:text-3xl gap-3 sm:gap-5 md:gap-7 lg:gap-9 p-5 font-bold'>
          <h1 className='hover:bg-zinc-50/90 px-5 py-2 w-36 sm:w-40 md:w-44 lg:w-48 rounded-full text-end transition-all duration-500 ease-in-out cursor-pointer'>
          Home</h1>
          <h1 className='hover:bg-zinc-50/90 px-5 py-2 w-36 sm:w-40 md:w-44 lg:w-48 rounded-full text-end transition-all duration-500 ease-in-out cursor-pointer'>
            About</h1>
          <h1 className='hover:bg-zinc-50/90 px-5 py-2 w-36 sm:w-40 md:w-44 lg:w-48 rounded-full text-end transition-all duration-500 ease-in-out cursor-pointer'>
          Projects</h1>
          <h1 className='hover:bg-zinc-50/90 px-5 py-2 w-36 sm:w-40 md:w-44 lg:w-48 rounded-full text-end transition-all duration-500 ease-in-out cursor-pointer'>
          Contact</h1>
          <a href="https://drive.google.com/file/d/1QnSEZ_8SjdLV-pw_rmtGIsEcIPO_osRa/view?usp=sharing" target='_blank'>
          <h1 className='hover:bg-zinc-50/90 px-5 py-2 w-36 sm:w-40 md:w-44 lg:w-48 rounded-full text-end transition-all duration-500 ease-in-out cursor-pointer'>
          Resume</h1>
          </a>
          </div>
          )} 
        </div>
      </div>
       </div>
    </>
  )
}

export default FixedButtons