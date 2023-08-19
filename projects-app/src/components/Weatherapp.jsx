import React, { useState } from 'react'
import axios from 'axios'

const Weatherapp = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const getWeather = () => {
    if (search !== "") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b1c4223b56501afbb013220363ca04a7`;
      axios.get(url)
      .then((Response) => {
        setWeather(Response.data)
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

//  useEffect (() => {
//   if (search !== "") {
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b1c4223b56501afbb013220363ca04a7`;
//     axios.get(url)
//     .then((Response) => {
//      setWeather(Response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }
//   }, [search])

  return (
    <div className='absolute w-[100%] h-screen flex flex-col justify-start items-center z-10'>
      <h1 className='text-4xl text-orange-400 border-y-8 border-blue-800 mt-[8rem] mb-8 p-4'>Weather App</h1>
     <input className='border border-blue-800 text-2xl bg-transparent text-white p-4' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Enter your city name....' />
      <button className='border border-blue-800 m-auto p-4 text- mt-4 bg-orange-400 text-white rounded-full' onClick={getWeather}>Get Weather</button>
      <div className='absolute top-[26rem] flex flex-col text-2xl text-white m-4 p-4 gap-4 justify-start items-center'>
      {
        weather.name !== undefined ?
        <>
      <h1>City Name - {weather.name} {weather.sys.country}</h1>
     <span>Temperature - {weather.main.temp}</span>
     <span>Min-Temp - {weather.main.temp_min}</span>
     <span>Max-Temp - {weather.main.temp_max}</span>
     </>
     :
      <>
      <h1 className='text-center text-2xl text-white p-4'>Please Enter city name</h1>
      </>
    }
    </div> 
    </div>
  )
}

export default Weatherapp
