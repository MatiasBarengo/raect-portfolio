import React from 'react'
import { useState } from 'react'


const ProjectItem = ( { img, title, url, moreInfo } ) =>
{
  const [ info, setInfo ] = useState( false )
  const handleInfo = () =>
  {
    setInfo( !info )
  }
  return (
    <div className='relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={ img } alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          { title }
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>
          ReactJs
        </p>
        <button onClick={ handleInfo } className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
          More Info
        </button>
        {
          info ? ( <div className='fixed w-80 h-auto bg-gray-700/95 z-[99] flex flex-col justify-center items-center rounded-2xl'>
            <div>
              <button className='absolute top-1 right-1 px-2 pb-0.5 bg-white rounded-full font-semibold text-gray-700' onClick={ handleInfo } type="">X</button>
              <p className='m-[1rem] text-white text-lg'>
                { moreInfo }
              </p>
            </div>
            <a className='w-fit text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg mb-[1rem]' onClick={ handleInfo } href={ url } target='_blank'>
              Visit
            </a>
          </div>
          )
            :
            ( '' )
        }
      </div>
    </div>
  )
}

export default ProjectItem