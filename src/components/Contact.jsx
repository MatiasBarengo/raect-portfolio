import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () =>
{
  useEffect( () =>
  {
    Aos.init( { duration: 2000 } )
  }, [] )
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' data-aos='flip-up'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact me</h1>
      <form action='https://getform.io/f/7bc26b8e-287a-46c2-ad17-8718092e3b52' method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="phone" />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name="message" />
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg' type="">Send Message</button>
      </form>
    </div>
  )
}

export default Contact