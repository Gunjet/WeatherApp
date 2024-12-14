
export default function WeatherCard({ bgcolor, date, cityName, temperature, stat}) {
  return (
    <div className={`w-[345px] h-[750px] px-7 py-10 rounded-3xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        bgcolor === "white" ? "bg-white" : "bg-black" }`} >
       <div className='text-gray-500 text-xl'>{date}</div>
       <div className='text-[48px] text-black'>{cityName}</div>
       <div className='flex justify-center mt-10'>
         <img src='/sun.png' width='262' height='262'/>
       </div>
       <div className='text-9xl mt-7'>{temperature}</div>
       <div className='text-2xl'>{stat}</div>
    </div>
  );
}