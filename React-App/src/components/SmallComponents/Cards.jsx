import React from 'react'

const Cards = ({title,iconsss,styless}) => {
  return (
    
    <div className="card h-[200px] w-[200px] cursor-pointer relative bg-[#171717] p-5 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-5">
    <p
      className="text-white leading-tight  text-base  font-[futura] overflow-hidden break-words"
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        lineClamp: 3,
      }}
    >
      {title}
    </p>
    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-white rounded-full absolute bottom-5 right-5">
      <img className="w-10 h-10" src={iconsss} alt="Icon" />
    </div>
  </div>
  
  
    
  )
}

export default Cards
