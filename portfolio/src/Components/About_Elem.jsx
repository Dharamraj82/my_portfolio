import React from 'react'
import { GrCode } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { VscCommentUnresolved } from "react-icons/vsc";
import { MdOutlineLanguage } from "react-icons/md";

const About_Elem = () => {
  return (
    <>
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-[90%] rounded-2xl text-zinc-200 flex flex-wrap overflow-hidden'>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-zinc-200/15 text-xl p-6 flex flex-col gap-3'>
    <PiStudentBold className='text-4xl text-zinc-300/65'/>
  <div className='flex flex-col gap-1'>
  <h1 className='font-semibold'>BCA Student</h1>
  <h2 className='font-normal text-zinc-300/65'>
  3rd-year BCA, MCC Hazaribagh, Technical Knowledge</h2>
 </div>
  </div>
 <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-zinc-200/15 text-xl p-6 flex flex-col gap-3'>
    <GrCode className='text-4xl text-zinc-300/65'/>
  <div className='flex flex-col gap-1'>
  <h1 className='font-semibold'>Skill coder</h1>
  <h2 className='font-normal text-zinc-300/65'>
  React, HTML, CSS, JavaScript, DSA, Java, C, C++</h2>
 </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-zinc-200/15 text-xl p-6 flex flex-col gap-3'>
    <VscCommentUnresolved className='text-4xl text-zinc-300/65'/>
  <div className='flex flex-col gap-1'>
  <h1 className='font-semibold'>Problem Solver</h1>
  <h2 className='font-normal text-zinc-300/65'>
  Critical Thinking, Troubleshooting, Analytical Skills, Solutions-oriented</h2>
 </div>
  </div>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-zinc-200/15 text-xl p-6 flex flex-col gap-3'>
    <MdOutlineLanguage className='text-4xl text-zinc-300/65'/>
  <div className='flex flex-col gap-1'>
  <h1 className='font-semibold'>Communication Abilities</h1>
  <h2 className='font-normal text-zinc-300/65'>
  Effective, Bilingual, Clear, Collaborative, Adaptable</h2>
 </div>
  </div>
</div>
    </div>
    </>
  )
}

export default About_Elem