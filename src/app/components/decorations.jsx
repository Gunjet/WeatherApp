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

export function Search(){
    return(
        <div className="w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10">
           <AiOutlineSearch className='text-2xl ml-5 '/>
           <input className="p-3 text-xl border-none focus:outline-none" placeholder="Search"/>
         </div> 
    )
}

export function Icons(iconColor='black'){
    return(
      <div className={`absolute text-${iconColor} ml-[120px] my-[700px] h-32 w-[360px] flex justify-around z-40 overflow-visible`}>
        <CiHome className="text-black text-xl"/>
        <CiLocationOn className="text-black text-xl"/>
        <CiHeart className="text-black text-xl"/>
        <IoPersonOutline className="text-black text-xl"/>
       </div>
    )
}
