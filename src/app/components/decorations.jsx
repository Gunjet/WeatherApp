import { AiOutlineSearch } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

export default function Logo(){
    return(
     <div className="absolute z-30 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-x-5">
        <img src='/Vector-2.png' width='43' height='86' layout="responsive"/>
        <img src='/Vector-3.png' width='43' height='86' layout="responsive"/>
      </div>
    )
}

export function Search({ visible = true }) {
    return (
      <div className={`${visible ? 'block' : 'invisible'} w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10 z-40 absolute`}>
        <AiOutlineSearch className="text-2xl ml-5" />
        <input className="p-3 text-xl border-none focus:outline-none" placeholder="Search" />
      </div>
    );
  }
  
  
export function Icons({ iconColor = 'black' }) {
  const iconClass = iconColor === 'white' ? 'text-white' : 'text-black';

  return (
    <div className="absolute text-${iconColor} ml-[120px] my-[800px] h-32 w-[360px] flex justify-around z-40 overflow-visible">
      <CiHome className={`text-xl ${iconClass}`} />
      <CiLocationOn className={`text-xl ${iconClass}`} />
      <CiHeart className={`text-xl ${iconClass}`} />
      <IoPersonOutline className={`text-xl ${iconClass}`} />
    </div>
  );
}

export function YellowCircle() {
    return (
      <div className="absolute ml-[70px] mt-[60px]">
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 176">
          <circle cx="88" cy="88" r="88" fill="#FF8E27" />
          <circle cx="88" cy="88" r="88" fill="url(#paint0_radial)" fillOpacity="0.35" style={{ mixBlendMode: 'overlay' }} />
          <defs>
            <radialGradient id="paint0_radial" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }
  
  export function BlueCircle() {
    return (
      <div className="absolute ml-[400px] mt-[780px]">
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="64" fill="#6E72C9" />
          <circle cx="64" cy="64" r="64" fill="url(#paint0_radial_139_563)" fillOpacity="0.35" style={{ mixBlendMode: 'overlay' }} />  
          <defs>
            <radialGradient id="paint0_radial_139_563" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(64 64) rotate(90) scale(64)">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }
  