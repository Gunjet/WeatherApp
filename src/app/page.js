
import WeatherCard from './components/WeatherCard';
import Circle from './components/circle';
import Logo from './components/decorations';
import { Search } from './components/decorations';
import { Icons } from './components/decorations';
import { CiLocationOn } from "react-icons/ci";
// import { YellowCircle } from './components/decorations';
import { BlueCircle } from './components/decorations';

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white justify-center relative">
      <div className="w-[1200px] h-full flex relative font-semibold">
  
        <div className="w-1/2 h-full bg-[#F3F4F6] relative">
          {/* <YellowCircle/> */}
          <Search visible={true} />
          <WeatherCard
            bgcolor="white"
            date="Sep 10, 2024"
            cityName="Krakow"
            temperature="12°"
            stat="Bright" 
            weatherType="day" 
            textColor="black"
            statColor="green"
            temperatureColor="black"
          />
          <Icons iconColor="black" />
          <CiLocationOn className="absolute text-xl text-black z-40 ml-[405px] my-[160px]" />
        </div>

        <div className="w-1/2 h-full bg-[#0F141E] relative">
          <BlueCircle/>
          <Search visible={false} />
          <WeatherCard
            bgcolor="black"
            date="Sep 10, 2024"
            cityName="Krakow"
            temperature="-2°"
            stat="Clear"
            weatherType="night" 
            textColor="white"
            statColor="green"
          />
          <Icons iconColor="white" />
          <CiLocationOn className="absolute text-xl text-white z-40 ml-[405px] my-[160px]" />
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
