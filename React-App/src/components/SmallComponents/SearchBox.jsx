import React from 'react'
import { assets } from '../../assets/assets'

const SearchBox = ({onchange,values,onclickSend}) => {
  
  /* const [input, setinput] = useState("") */
  return (
    <div className="search flex items-center bg-[#171717] rounded-full px-5 py-5 shadow-md hover:shadow-lg transition-shadow duration-300">
  <img 
   style={{filter : "invert(1"}}
    src={assets.gallery_icon} 
    alt="Gallery Icon" 
    className="w-5 h-5 text-white cursor-pointer mr-2" 
  />
  
  <input 
    
    onChange={onchange}
    value={values}
    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none px-3" 
    type="text" 
    placeholder="Ask Meditech..." 
  />
  
  <img 
    style={{filter : "invert(1"}}
    src={assets.mic_icon} 
    alt="Mic Icon" 
    className="w-5 h-5 text-white cursor-pointer ml-2" 
  />
  

  
  <img 
    onClick={onclickSend}
    style={{filter : "invert(1"}}
    src={assets.send_icon} 
    alt="Send Icon" 
    className="w-5 h-5 text-white cursor-pointer ml-2 " 
  />
</div>

  
  )
}

export default SearchBox
