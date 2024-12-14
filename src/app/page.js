
import WeatherCard from './components/WeatherCard';
import Circle from './components/circle';
import Logo from './components/decorations';
import {Search} from './components/decorations';
import {Icons} from './components/decorations';

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white justify-center relative">
      <div className="w-[1200px] h-full flex relative">
        <div className="w-1/2 h-full bg-[#F3F4F6] relative">
         <Search/>
         <WeatherCard 
          bgcolor="white" 
          date='Sep 10, 2024' 
          cityName='Ulaanbaatar' 
          temperature='12°'
          stat='Bright'
          weatherType="day" 
          textColor="black"
          statColor='green'
          temperatureColor='black'
         />
         <Icons 
           iconColor='white'
         />
        </div>
        <div className="w-1/2 h-full bg-[#0F141E] relative">
          <WeatherCard
            bgcolor="black" 
            date='Sep 10, 2024' 
            cityName='Ulaanbaatar' 
            temperature='-2°' 
            stat='Clear' 
            weatherType="night" 
            textColor="white"
            statColor='green'
          />
          <Icons 
            iconColor='white'
          />
        </div>
        <Circle size={140} />
        <Circle size={340} />
        <Circle size={540} />
        <Circle size={940} />
      </div>
      <Logo/>
    </div>
  )}