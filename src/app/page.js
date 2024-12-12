
import WeatherCard from './components/WeatherCard';
import Circle from './components/circle';
import SearchInput from './components/searchinput';

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white justify-center relative">
      <div className="w-[1200px] h-full flex relative">
        <div className="w-1/2 h-full bg-[#F3F4F6] relative">
          <input className="p-2" placeholder="Search" />
          <WeatherCard bgcolor="white" />
        </div>
        <div className="w-1/2 h-full bg-[#0F141E] relative">
          <WeatherCard bgcolor="black" />
        </div>
        <Circle size={140} />
        <Circle size={340} />
        <Circle size={540} />
      </div>
    </div>
  );
}



