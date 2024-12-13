
import WeatherCard from './components/WeatherCard';
import Circle from './components/circle';
import Logo from './components/decorations';
import {FilledCircle} from './components/decorations';
// import {IoIosSearch} from "react-icons/io"

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white justify-center relative">
      <div className="w-[1200px] h-full flex relative">
        <div className="w-1/2 h-full bg-[#F3F4F6] relative">
         <div className="w-[400px] h-[55px] bg-white rounded-3xl flex items-center">
           <input className="p-2" placeholder="Search" />
         </div>
         <WeatherCard bgcolor="white" />
        </div>
        <div className="w-1/2 h-full bg-[#0F141E] relative">
          <WeatherCard bgcolor="black" />
        </div>
        <Circle size={140} />
        <Circle size={340} />
        <Circle size={540} />
        <FilledCircle/>
      </div>
      <Logo/>
    </div>
  );
}
