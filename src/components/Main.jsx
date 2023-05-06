import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Main = () =>
{
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://blog.vindi.com.br/wp-content/uploads/2020/03/home-office-scaled.jpg" alt="/" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
        <div data-aos='zoom-in' className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold '>I'm Matias Barengo</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4'>I'm a<TypeAnimation
            sequence={ [
              'Tech Enthusiast', // Types 'One'
              1500, // Waits 2s
              'Coder', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'Full Stack Developer', // Types 'Three' without deleting 'Two'
              3500
            ] }
            wrapper="div"
            cursor={ true }
            repeat={ Infinity }
            style={ { fontSize: '1em', paddingLeft: '5px' } }
          />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a
              href='https://www.linkedin.com/in/matias-barengo-dev/'
              target="_blank"
            >
              <FaLinkedinIn size={ 30 } className='cursor-pointer hover:scale-150 ease-in duration-200' />
            </a>
            <a
              href='https://github.com/MatiasBarengo'
              target="_blank"
            >
              <FaGithub size={ 30 } className='cursor-pointer hover:scale-150 ease-in duration-200' />
            </a>
            <a
              href='https://wa.me/541161444231'
              target="_blank"
            >
              <FaWhatsapp size={ 30 } className='cursor-pointer hover:scale-150 ease-in duration-200' />
            </a>
            <a
              title='My CV'
              href="https://drive.google.com/file/d/1KFqI5zgBf9QvcOd07RkFCNupzxdp11_C/view?usp=share_link"
              target="_blank"
            >
              <i className="fa-solid fa-file-arrow-down cursor-pointer hover:scale-150 ease-in duration-200" style={ { fontSize: '1.8rem' } }></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main