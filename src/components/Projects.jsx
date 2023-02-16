import React from 'react'
import ProjectItem from './ProjectItem'
import pokedexImg from '../assets/pokedex.jpg'
import rickAndMortyImg from '../assets/rickandmorty.jpg'
import boxShadowGeneratorImg from '../assets/boxshadowgenerator.jpg'
import weatherAppImg from '../assets/weatherapp.jpg'

const Projects = () =>
{
  const pokedexUrl = 'https://pokedex-barengo.netlify.app/';
  const rickAndMortyUrl = 'https://matiasbarengo-rick-and-morty.netlify.app/';
  const boxShadowGeneratorUrl = 'https://matiasbarengo-css-shadow-generator.netlify.app';
  const weatherAppUrl = 'https://react-entregable-2.netlify.app/';
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Projects</h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={ pokedexImg } title='Pokedex App' url={ pokedexUrl } />
        <ProjectItem img={ rickAndMortyImg } title='Rick and Morty App' url={ rickAndMortyUrl } />
        <ProjectItem img={ boxShadowGeneratorImg } title='Box shadow generator App' url={ boxShadowGeneratorUrl } />
        <ProjectItem img={ weatherAppImg } title='Weather App' url={ weatherAppUrl } />
      </div>
    </div>
  )
}

export default Projects