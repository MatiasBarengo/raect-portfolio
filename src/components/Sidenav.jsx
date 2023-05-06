import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const Sidenav = () =>
{
  useEffect( () =>
  {
    Aos.init( { duration: 2000 } )
  }, [] )

  const [ nav, setNav ] = useState( false );
  const handleNav = () =>
  {
    setNav( !nav )
    console.log( 'state changed' )
  }

  const cajachica = 1

  return (
    <div>
      <AiOutlineMenu
        onClick={ handleNav }
        className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-3 w-[3.5rem] h-[3.5rem] hover:scale-110 ease-in duration-100'
        size={ 35 } />
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/60 flex flex-col justify-center items-center z-20'>
            <a onClick={ handleNav } href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
              <AiOutlineHome size={ 20 } />
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={ handleNav } href="#about-me" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
              <BsPerson size={ 20 } />
              <span className='pl-4'>About me</span>
            </a>
            <a onClick={ handleNav } href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
              <GrProjects size={ 20 } />
              <span className='pl-4'>Work</span>
            </a>
            <a onClick={ handleNav } href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
              <AiOutlineProject size={ 20 } />
              <span className='pl-4'>Projects</span>
            </a>
            <a onClick={ handleNav } href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
              <AiOutlineMail size={ 20 } />
              <span className='pl-4'>Contact me</span>
            </a>
          </div>
        )
          : (
            ''
          )
      }
      <div className='md:block hidden fixed top-[25%] left-4 z-10'>
        <div className='flex flex-col' data-aos='flip-up'>
          <a title='Home' href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineHome size={ 25 } />
          </a>
          <a title='About me' href="#about-me" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <BsPerson size={ 25 } />
          </a>
          <a title='Work experience' href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <GrProjects size={ 25 } />
          </a>
          <a title='Projects' href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineProject size={ 25 } />
          </a>
          <a title='Contact' href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100'>
            <AiOutlineMail size={ 25 } />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav; 