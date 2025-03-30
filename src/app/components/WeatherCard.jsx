export default function WeatherCard({
  bgcolor,
  date,
  cityName,
  temperature,
  stat,
  weatherType, 
  textColor = 'white',
  statColor 
}) {
  
  const dayGradient = 'bg-gradient-to-b from-[#111827] to-[#6B7280]'; 
  const nightGradient = 'bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00]'; 
  const gradientClass = weatherType === 'day' ? dayGradient : nightGradient;
  const statColorBright = '#FF8E27'; 
  const statColorClear = '#777CCE';
  const dynamicStatColor = bgcolor === 'black' ? statColorClear : bgcolor === 'white' ? statColorBright : statColor;
  
  return (
    <div
      className={`lg:w-[300px] lg:h-[600px] 2xl:w-[345px] 2xl:h-[750px] px-7 py-10 rounded-3xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        bgcolor === 'white' ? 'bg-white backdrop-blur-md' : 'bg-gradient-to-b from-[#1F2937] to-[#11182700] backdrop-blur-md'
      }`}
    >
      <div className="text-gray-500 lg:text-md 2xl:text-xl">{date}</div>
      <div className={`lg:text-[38px] 2xl:text-[48px] text-${textColor}`}>{cityName}</div>

      <div className="flex justify-center mt-10">
        {weatherType === 'day' ? (
          <img src="/sun.png" alt="Sun" width="230" height="230" />
        ) : (
          <img src="/moon.png" alt="Moon" width="230" height="230" />
        )}
      </div>

      <div
        className={`lg:text-7xl 2xl:text-8xl lg:mt-3 2xl:mt-7 ${gradientClass} text-transparent bg-clip-text font-[800]`}
      >
        {temperature}
      </div>
      <div className={`lg:text-lg 2xl:text-2xl lg:mt-4 2xl:mt-8`} style={{ color: dynamicStatColor }}>
        {stat}
      </div>
    </div>
  );
}

