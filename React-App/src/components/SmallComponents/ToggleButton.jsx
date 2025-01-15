// ToggleButton.jsx
import React from 'react';

const ToggleButton = ({ togglePlacement, togglePosition }) => {
  return (
    <div onClick={togglePlacement} className="flex justify-end">
      <div
        className={`relative flex px-1 justify-${togglePosition === 'left' ? 'start' : 'end'} 
                    items-center w-10 h-5 rounded-full 
                    transition-all duration-300 ease-in-out ${togglePosition === 'left' ? 'bg-[#403e3e]' : 'bg-blue-500'}`}
      >
        {/* Inner rounded circle */}
        <div
          className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ease-in-out`}
          style={{
            transform: togglePosition === 'left' ? 'translateX(0)' : 'translateX(10%)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ToggleButton;
