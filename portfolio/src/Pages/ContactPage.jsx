import React, { useState } from 'react';
import { FaStarOfLife } from 'react-icons/fa6';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  const submitMessage = (e) => {
    e.preventDefault();
    if (!firstName || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    alert('Message Submitted Successfully');
    setFirstName('');
    setLastName('');
    setEmail('');
    setCompanyName('');
    setMessage('');
    e.target.submit(); 
  };

  return (
    <>
      <div className='w-screen bg-zinc-400/40 text-zinc-900/90'>
        <div className='flex flex-wrap px-[3vw] py-[10vw] justify-between gap-10'>
          <div className='flex flex-col text-[44px] leading-tight'>
            <h1>Questions?</h1>
            <h2>Reach out.</h2>
          </div>
          <div className='flex flex-wrap'>
            <form onSubmit={submitMessage} action="https://api.web3forms.com/submit" method="POST" className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-full'>
              <input type="hidden" name="access_key" value="27b3ab42-d879-4e58-af67-ccaa8662d933" />
              <input type="hidden" name="redirect" value="http://localhost:5173" target="_blank"/>
              <div className='flex flex-col w-[45vh] md:w-[47vh] lg:w-[50vh]'>
                <label htmlFor='firstname' className='text-lg md:text-xl flex flex-row flex-nowrap gap-1 items-center'>
                  First Name <FaStarOfLife className='text-red-700 text-[7px]' />
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id='firstname'
                  name='first_name'
                  type='text'
                  placeholder='Type'
                  className='px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 border-zinc-950 border-dashed !important'
                />
              </div>
              <div className='flex flex-col w-[45vh] md:w-[47vh] lg:w-[50vh]'>
                <label htmlFor='lastname' className='text-lg md:text-xl'>Last Name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id='lastname'
                  name='last_name'
                  type='text'
                  placeholder='Type'
                  className='px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 border-zinc-950 border-dashed'
                />
              </div>
              <div className='flex flex-col w-[45vh] md:w-[47vh] lg:w-[50vh]'>
                <label htmlFor='email' className='text-lg md:text-xl flex flex-row flex-nowrap gap-1 items-center'>
                  Email <FaStarOfLife className='text-red-700 text-[7px]' />
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Type'
                  className='px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 border-zinc-950 border-dashed'
                />
              </div>
              <div className='flex flex-col w-[45vh] md:w-[47vh] lg:w-[50vh]'>
                <label htmlFor='companyname' className='text-lg md:text-xl'>Company Name</label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  id='companyname'
                  name='company_name'
                  type='text'
                  placeholder='Type'
                  className='px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 border-zinc-950 border-dashed'
                />
              </div>
              <div className='flex flex-col w-[45vh] md:w-[47vh] lg:w-[50vh]'>
                <label htmlFor='message' className='text-lg md:text-xl flex flex-row flex-nowrap gap-1 items-center'>
                  Message <FaStarOfLife className='text-red-700 text-[7px]' />
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id='message'
                  name='message'
                  placeholder='Type'
                  className='px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 border-zinc-950 border-dashed resize-none overflow-hidden'
                  rows='2'
                />
              </div>
              <div className='flex flex-col justify-end w-[20vh]'>
                <button className='bg-zinc-950 text-zinc-50 px-4 py-2 rounded-3xl'>Submit</button>
              </div>
            </form>
            <div className='w-full py-[7vh] text-lg font-semibold leading-normal'>
              <h1>Reach out directly at</h1>
              <h1 className='underline underline-offset-8'>dpy9572@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
