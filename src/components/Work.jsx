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
      (
        <WorkItem
          key={ idx }
          year={ item.year }
          duration={ item.duration }
          title={ item.title }
          details={ item.details }
          moreDetails={ item.moreDetails }
        />
      ) ) }
    </div>
  )
}

export default Work