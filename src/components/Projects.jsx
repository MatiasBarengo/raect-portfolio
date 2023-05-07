import React, { useEffect } from 'react'
import ProjectItem from './ProjectItem'
import pokedexImg from '../assets/pokedex.jpg'
import rickAndMortyImg from '../assets/rickandmorty.jpg'
import boxShadowGeneratorImg from '../assets/boxshadowgenerator.jpg'
import weatherAppImg from '../assets/weatherapp.jpg'
import CmcImg from '../assets/cmc.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () =>
{
  useEffect( () =>
  {
    Aos.init( { duration: 1500 } )
  }, [] )

  const pokedexUrl = 'https://pokedex-barengo.netlify.app/';
  const pokedexInfo = 'An application based on the pokeApi which filters the characters of the series and shows their characteristics.';
  const pokedexTechnologies = [ 'ReactJs', 'JavScript', 'Redux', 'CSS3', 'pokeapi.co' ];

  const rickAndMortyUrl = 'https://matiasbarengo-rick-and-morty.netlify.app/';
  const rickandmortyInfo = 'An application based on rickandmortyapi that filters the characters of the series by their planet of location and shows their information.';
  const rickandmortyTechnologies = [ 'ReactJs', 'JavScript', 'Redux', 'CSS3', 'rickandmortyapi.com' ];

  const boxShadowGeneratorUrl = 'https://matiasbarengo-css-shadow-generator.netlify.app';
  const boxShadowGeneratorInfo = 'An application that generates component shadows and displays css code.';
  const boxshadowTechnologies = [ 'Vanilla JavaScript', 'CSS3' ];

  const weatherAppUrl = 'https://react-entregable-2.netlify.app/';
  const weatherAppInfo = 'An application that obtains information from the user location and shows their weather factors.';
  const weatherappTechnologies = [ 'ReactJs', 'JavScript', 'CSS3', 'openweathermap.org' ];


  const cmcUrl = 'https://c10-32-m-mern.vercel.app/';
  const cmcAppInfo = 'An application Destined for a medical center which organizes the medical agenda of both the patient and the specialist, it was created to make it easier for patients to obtain their medical appointments, as the name indicates, just a click away.';
  const cmcTechnologies = [ 'ReactJs', 'TypeScript', 'Redux', 'Tailwind CSS', 'NodeJs', 'PostgreSQL', 'Express', 'Sequelize' ];

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' data-aos='flip-up'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Projects</h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={ CmcImg }
          title='CMC Citas medicas a un click'
          url={ cmcUrl }
          moreInfo={ cmcAppInfo }
          technologies={ cmcTechnologies }
        />
        <ProjectItem
          img={ pokedexImg }
          title='Pokedex App'
          url={ pokedexUrl }
          moreInfo={ pokedexInfo }
          technologies={ pokedexTechnologies }
        />
        <ProjectItem
          img={ rickAndMortyImg }
          title='Rick and Morty App'
          url={ rickAndMortyUrl }
          moreInfo={ rickandmortyInfo }
          technologies={ rickandmortyTechnologies }
        />
        <ProjectItem
          img={ boxShadowGeneratorImg }
          title='Box shadow generator App'
          url={ boxShadowGeneratorUrl }
          moreInfo={ boxShadowGeneratorInfo }
          technologies={ boxshadowTechnologies }
        />
        <ProjectItem
          img={ weatherAppImg }
          title='Weather App'
          url={ weatherAppUrl }
          moreInfo={ weatherAppInfo }
          technologies={ weatherappTechnologies }
        />
      </div>
    </div>
  )
}

export default Projects