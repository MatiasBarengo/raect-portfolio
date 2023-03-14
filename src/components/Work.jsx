import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import WorkItem from './WorkItem'

const Work = () =>
{
  useEffect( () =>
  {
    Aos.init( { duration: 2000 } )
  }, [] )

  const data = [
    {
      year: 2022,
      duration: 'Present',
      title: 'Dharma panificados',
      details: 'General operator',
      moreDetails: 'management of industrial ovens for bread production.'
    },
    {
      year: 2022,
      duration: '3 months',
      title: 'Pedidos Ya!',
      details: 'Rider'
    },
    {
      year: 2015,
      duration: '6 years',
      title: 'Vip-Electromedicina',
      details: 'General operator',
      moreDetails: 'Machining, Assembly, Polishing, Wiring and Assembly of electronic boards for physiotherapy equipment.'
    },
    {
      year: 2013,
      duration: '2 years',
      title: 'Diseños Iwoka',
      details: 'Designer - Carpenter operator',
      moreDetails: 'Custom furniture design and rendering using Rhinoceros and 3D MAX Studio.'
    },
  ]
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' data-aos='flip-up'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Work Experience</h1>
      { data.map( ( item, idx ) =>
      {
        <WorkItem
          key={ idx }
          year={ item.year }
          duration={ item.duration }
          title={ item.title }
          details={ item.details }
          moreDetails={ item.moreDetails }
        />
      } ) }
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200 '>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
              { data[ 0 ].year }
            </span>
            <span className='text-lg font-semibold text-[#001b5e]' >
              { data[ 0 ].title }
            </span>
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>
              { data[ 0 ].duration }
            </span>
          </p>
          <p className='my-2 textbase font-normal text-stone-500 italic'>
            { data[ 0 ].details }
          </p>
          <p className='my-2 textbase font-normal text-stone-500'>
            { data[ 0 ].moreDetails }
          </p>
        </li>
      </ol>
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
              { data[ 1 ].year }
            </span>
            <span className='text-lg font-semibold text-[#001b5e]' >
              { data[ 1 ].title }
            </span>
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>
              { data[ 1 ].duration }
            </span>
          </p>
          <p className='my-2 textbase font-normal text-stone-500 italic'>
            { data[ 1 ].details }
          </p>
          <p className='my-2 textbase font-normal text-stone-500'>
            { data[ 1 ].moreDetails }
          </p>
        </li>
      </ol>
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
              { data[ 2 ].year }
            </span>
            <span className='text-lg font-semibold text-[#001b5e]' >
              { data[ 2 ].title }
            </span>
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>
              { data[ 2 ].duration }
            </span>
          </p>
          <p className='my-2 textbase font-normal text-stone-500 italic'>
            { data[ 2 ].details }
          </p>
          <p className='my-2 textbase font-normal text-stone-500'>
            { data[ 2 ].moreDetails }
          </p>
        </li>
      </ol>
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
              { data[ 3 ].year }
            </span>
            <span className='text-lg font-semibold text-[#001b5e]' >
              { data[ 3 ].title }
            </span>
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>
              { data[ 3 ].duration }
            </span>
          </p>
          <p className='my-2 textbase font-normal text-stone-500 italic'>
            { data[ 3 ].details }
          </p>
          <p className='my-2 textbase font-normal text-stone-500'>
            { data[ 3 ].moreDetails }
          </p>
        </li>
      </ol>
    </div>
  )
}

export default Work