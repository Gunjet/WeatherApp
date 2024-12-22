"use client"
 
import WeatherCard from './components/WeatherCard';
import Circle from './components/circle';
import Logo from './components/decorations';
import { Search } from './components/decorations';
import { Icons } from './components/decorations';
import { CiLocationOn } from "react-icons/ci";
import { YellowCircle } from './components/decorations';
import { BlueCircle } from './components/decorations';
import { useState, useEffect } from 'react';

const API_KEY='5bf8f7f6f1ac4ed1ae772612241312'

export default function Home() {
  const [search, setSearch ]=useState('');
  const [city, setCity] =useState('Ulaanbaatar');
  const [dayWeather,setDayWeather]=useState({})

  const onChangeText=(e) => {
   const value=e.target.value
   setSearch(value)
  };

  const onPressEnter=(e)=>{
    if(e.code==='Enter'){
      setCity(search);
    }
  }
     useEffect(()=>{
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=5bf8f7f6f1ac4ed1ae772612241312&q=${city}&days=1&aqi=no&alerts=no`)
      .then((response)=> response.json())
      .then((data)=>{
      setDayWeather({
        temperature : data.forecast.forecastday[0].day.maxtemp_c,
        nightTemp: data.forecast.forecastday[0].day.mintemp_c, 
        condition: data.forecast.forecastday[0].day.condition.text,
        date: data.forecast.forecastday[0].date
        }
       )      
      })
     },[city]);

  return (
    <div className="flex h-screen w-full bg-white justify-center relative ">
      <div className="w-[1200px] h-full flex relative font-semibold">
  
        <div className="w-1/2 h-full bg-[#F3F4F6] relative">
          <YellowCircle/>
          <Search 
           visible={true}
           search={search}
           onChangeText={onChangeText}
           onPressEnter={onPressEnter}
          />
          <WeatherCard
            bgcolor="white"
            date={dayWeather.date}
            cityName={city}
            temperature={`${dayWeather.temperature}°`}
            stat={dayWeather.condition} 
            weatherType="day" 
            textColor="black"
            temperatureColor="black"
          />
          <Icons iconColor="#D1D5DB" />
          <CiLocationOn className="absolute text-xl text-black z-40 ml-[405px] my-[270px]" />
        </div>

        <div className="w-1/2 h-full bg-[#0F141E] relative">
          <BlueCircle/>
          <Search visible={false} />
          <WeatherCard
            bgcolor="black"
            date={dayWeather.date}
            cityName={city}
            temperature={`${dayWeather.nightTemp}°`}
            stat={dayWeather.condition}
            weatherType="night" 
            textColor="white"
            statColor="green"
          />
          <Icons iconColor="white" />
          <CiLocationOn className="absolute text-xl text-white z-40 ml-[405px] my-[270px]" />
        </div>

        <Circle size={140} />
        <Circle size={340} />
        <Circle size={540} />
        <Circle size={940} />
      </div>
      <Logo />
    </div>
  );
}
