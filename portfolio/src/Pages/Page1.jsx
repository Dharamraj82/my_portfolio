import React from 'react'
import Page1_Text from '../Components/Page1_Text'
import FixedButtons from '../Components/FixedButtons'
import Page1_Footer from '../Components/Page1_Footer'
import bgImage1 from '../assets/Dharamraj Bg Image.png';
import bgImage2 from '../assets/Dharamraj Image Sm.png';
import NavBar from '../Components/NavBar';
const Page1 = () => {
  return (
    <>
    <div className='reletive h-screen hidden md:block w-full p-2 lg:p-6 sm:p-3 '>
      <div style={ {backgroundImage: `url(${bgImage1})` }} className='h-full w-full rounded-[30px] sm:rounded-[50px] bg-gray-500 bg-center bg-cover '>
      <FixedButtons/>
      <Page1_Text/>
      <Page1_Footer/>
      </div>
    </div>
    <div className='reletive md:hidden h-screen w-full p-2 lg:p-6 sm:p-3 '>
      <div style={ {backgroundImage: `url(${bgImage2})` }} className='h-full w-full rounded-[30px] sm:rounded-[50px] bg-gray-500 bg-center bg-cover '>
      <FixedButtons/>
      <Page1_Text/>
      <Page1_Footer/>
      </div>
    </div>
    </>
  )
}

export default Page1