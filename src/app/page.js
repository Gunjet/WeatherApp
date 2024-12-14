
import WeatherCard from './components/WeatherCard';
import Circle from './components/circle';
import Logo from './components/decorations';
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white justify-center relative">
      <div className="w-[1200px] h-full flex relative">
        <div className="w-1/2 h-full bg-[#F3F4F6] relative">
         <div className="w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10">
           <AiOutlineSearch className='text-2xl ml-5'/>
           <input className="p-3 border-none text-xl" placeholder="Search"/>
         </div>
         <WeatherCard bgcolor="white" date='Sep 10, 2024' cityName='Ulaanbaatar' temperature='12°' stat='bright'/>
        </div>
        <div className="w-1/2 h-full bg-[#0F141E] relative">
          <WeatherCard bgcolor="black"  date='Sep 10, 2024' cityName='Krakow' stat='clear'/>
        </div>
        <Circle size={140} />
        <Circle size={340} />
        <Circle size={540} />
        <Circle size={940} />
      </div>
      <Logo/>
    </div>
  );
}
