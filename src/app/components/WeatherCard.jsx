
// export default function WeatherCard({bgcolor}) {
//   return (
//     <div className={`w-[345px] h-[750px] rounded-3xl bg-[${bgcolor}] absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
//   );
// }
export default function WeatherCard({ bgcolor }) {
  return (
    <div
      className={`w-[345px] h-[750px] rounded-3xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        bgcolor === "white" ? "bg-white" : "bg-black"
      }`}
    ></div>
  );
}
