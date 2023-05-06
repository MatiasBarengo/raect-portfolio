import React from 'react';
import htmlCssJavascript from '../assets/js-html-css.png'
import reactJs from '../assets/reactjs.png'
import tailwindCss from '../assets/tailwindcss.png'
import redux from '../assets/redux.png'
// import nextJs from '../assets/nextjs.png'
import typescript from '../assets/typescript.png'
import nodeJs from '../assets/nodejs.png'
import gmail from '../assets/gmail.png'
import whatsapp from '../assets/whatsapp.png'
import miFoto from '../assets/mifoto.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
// import cv from '../assets/cv.png'

const AboutMe = () =>
{
  return (
    <div
      id='about-me'
      className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'
      data-aos='flip-up'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] my-10'>
        About me
      </h1>
      <div>
        {/* Technologies */ }
        <h2 className='text-2xl font-bold text-left text-[#001b5e]'>
          Technologies
        </h2>
        <div data-aos='fade-right' className='flex flex-wrap justify-center items-center mt-4'>
          <div className='flex flex-col justify-center items-center'>
            <img
              title='HTML CSS JavaScript'
              className='h-32 mx-16 my-8 hover:scale-125 ease-in duration-200'
              src={ htmlCssJavascript }
              alt="html-css-javascript" />
            <p className='text-gray-500 italic'>HTML - CSS - JavaScript</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img
              title='ReactJs'
              className='h-32 mx-16 my-8 hover:scale-125 ease-in duration-200'
              src={ reactJs }
              alt="react-js" />
            <p className='text-gray-500 italic'>ReactJs</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img
              title='NodeJs'
              className='h-32 mx-16 my-8 hover:scale-125 ease-in duration-200'
              src={ nodeJs }
              alt="node-js" />
            <p className='text-gray-500 italic'>NodeJs</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img
              title='Tailwind CSS'
              className='h-32 mx-16 my-8 hover:scale-125 ease-in duration-200'
              src={ tailwindCss }
              alt="tailwind-css" />
            <p className='text-gray-500 italic'>Tailwind CSS</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img
              title='Redux'
              className='h-32 mx-16 my-8 hover:scale-125 ease-in duration-200'
              src={ redux }
              alt="redux" />
            <p className='text-gray-500 italic'>Redux</p>
          </div>
          {/* <div className='flex flex-col justify-center items-center'>
            <img
              title='NextJs'
              className='h-32 mx-16 my-8 hover:scale-125 ease-in duration-200'
              src={ nextJs }
              alt="nextjs" />
            <p className='text-gray-500 italic'>NextJs</p>
          </div> */}
          <div className='flex flex-col justify-center items-center'>
            <img
              title='TypeScript'
              className='h-32 mx-16 my-8 hover:scale-125 ease-in duration-200'
              src={ typescript }
              alt="typescript" />
            <p className='text-gray-500 italic'>TypeScript</p>
          </div>
        </div>
        {/* Contact Info */ }
        <h2 className='border-animation text-2xl font-bold text-left text-[#001b5e] mt-8'
        >Contact Info
        </h2>
        <div data-aos='fade-left' className='flex flex-wrap gap-20 justify-around items-center mt-8 '>
          {/* <a
            href="https://drive.google.com/file/d/1KFqI5zgBf9QvcOd07RkFCNupzxdp11_C/view?usp=share_link"
            target='_blank'>
            <img className='h-24 hover:scale-125 ease-in duration-200' src={ cv } title="Mi CV" />
          </a> */}
          <a
            href="https://github.com/MatiasBarengo"
            target='_blank'>
            <img className='h-24 hover:scale-125 ease-in duration-200' src={ github } title="Mi GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/matias-barengo-dev/"
            target='_blank'>
            <img className='h-24 hover:scale-125 ease-in duration-200' src={ linkedin } title="Mi Linkedin" />
          </a>
          <a
            href="https://wa.me/541161444231"
            target='_blank'>
            <img className='h-24 hover:scale-125 ease-in duration-200' src={ whatsapp } title="Mi WhatsApp" />
          </a>
          <a
            href="mailto:matiasbarengo99@gmail.com"
            target='_blank'>
            <img className='h-24 hover:scale-125 ease-in duration-200' src={ gmail } title="Mi Gmail" />
          </a>
        </div>
        {/* Know me */ }
        <h2 className='border-animation text-2xl font-bold text-left text-[#001b5e] mt-16'>
          Know me
        </h2>
        <div data-aos='fade-right' className='flex mt-4 justify-between md:h-[10rem] gap-8'>
          <p className='text-gray-500 italic text-lg'>
            Hi, my name is Matias, I'm a Full-Stack web developer and I live in Buenos Aires.
            I have experience in JavaScript, CSS, HTML, ReactJs, NextJs, NodeJs, Tailwind CSS.
            I am passionate about programming and I am looking to be part of a team in which i can develop my professional career as part of a company that allows me to apply everything i have learned and continue to grow professionally and personally.
            I have experience developing Front-end and Back-end projects.
            If you are interested, you can contact me.
          </p>
          <img className='hidden md:inline-block rounded-full h-100%' src={ miFoto } alt="Mi Foto" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;