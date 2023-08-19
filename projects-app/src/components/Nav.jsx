import React from 'react';
import { Link } from 'react-router-dom';
import { RiTodoLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { BsCalculator } from 'react-icons/bs';

const Nav = () => {
  return (
    <div className='absolute top-0 left-0 w-[100%] z-20'>
    <div className='flex flex-row justify-center item-center'>
     <Link to={'/'} className='rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white' ><AiOutlineHome /></Link>
     <Link to={'/todoapp'} className='rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white' ><RiTodoLine /></Link>
     <Link to={'/weatherapp'} className='rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white' ><TiWeatherPartlySunny /></Link>
     <Link to={'/calculator'} className='rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-orange-400 hover:text-white' ><BsCalculator /></Link>
    </div>
  </div> 
  )
}

export default Nav