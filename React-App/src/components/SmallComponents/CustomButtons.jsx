import React from 'react';

const CustomButtons = ({ title, icons, styless, onclick, togglePosition }) => {
  return (
    <div
      className={`flex items-center translate-all duration-300 
        hover:bg-[#202020] rounded-3xl py-[.4vw] px-[1vw] ${styless} 
        ${togglePosition === 'left' ? 'text-white hover:text-white' : 'text-black hover:text-white'}`}
    >
      <img
        onClick={() => console.log('Icon clicked')}
        className="w-6"
        style={{ filter: 'invert(1)' }}
        src={icons}
        alt=""
      />
      <h1 className="opacity-70" onClick={onclick}>{title}</h1>
    </div>
  );
};

export default CustomButtons;
