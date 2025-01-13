
import { AiOutlineSearch } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { useState, useEffect } from "react"


export default function Logo(){
    return(
     <div className="absolute z-30 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-x-5">
        <img src='/Vector-2.png' width='43' height='86' layout="responsive"/>
        <img src='/Vector-3.png' width='43' height='86' layout="responsive"/>
      </div>
    )
}

const API_KEY = '5bf8f7f6f1ac4ed1ae772612241312';

export const Search = ({ visible = true, search, onChangeText, onPressEnter }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (!debouncedSearch) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${debouncedSearch}`);
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedSearch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    onChangeText(e); 
  };

  const handleSuggestionClick = (suggestion) => {
    onChangeText({ target: { value: suggestion.name } }); 
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.code === "ArrowDown") {
      setHighlightedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.code === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.code === "Enter") {
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        handleSuggestionClick(suggestions[highlightedIndex]);
      } else {
        onPressEnter(e);
      }
    }
  };

  return (
    <div
      className={`${visible ? "block" : "invisible"} w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10 z-40 absolute`}
    >
      <AiOutlineSearch className="text-2xl ml-5" />
      <input
        className="p-3 text-xl text-black border-none focus:outline-none"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {loading && search && (
        <div className="absolute w-full mt-1 bg-white border rounded-xl z-50 max-h-60 overflow-y-auto">
          <div className="p-3 text-xl text-black">Loading...</div>
        </div>
      )}
      {suggestions.length > 0 && !loading && (
        <div className="absolute w-full mt-[130px] bg-white backdrop-blur-lg border-none rounded-3xl max-h-60 overflow-y-auto">
          <ul className="list-none m-0 pl-3 flex items-center ">
          <IoLocationOutline className='text-xl ml-3'/>
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion.id} 
                className={`p-3 cursor-pointer text-black text-md `}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setHighlightedIndex(index)} 
              >
                {suggestion.name}, {suggestion.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export function Icons({ iconColor = 'black' }) {
  const iconClass = iconColor === 'white' ? 'text-white' : 'text-black';

  return (
  <div className={`absolute text-${iconColor} ml-[120px] my-[900px] h-32 w-[360px] flex justify-around z-40 overflow-visible 
   sm:ml-[60px] sm:my-[700px] md:ml-[120px] md:my-[850px]`}>
   <CiHome className={`text-xl ${iconClass}`} />
   <CiLocationOn className={`text-xl ${iconClass}`} />
   <CiHeart className={`text-xl ${iconClass}`} />
   <IoPersonOutline className={`text-xl ${iconClass}`} />
  </div>
  );
}

export function YellowCircle() {
    return (
      <div className="absolute ml-[60px] mt-[180px]
       sm:mt-[120px]">
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
      <div className="absolute ml-[400px] mt-[880px]
       sm:mt-[840px]">
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