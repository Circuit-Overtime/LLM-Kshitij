import React, { useContext } from 'react';
import { Context } from '../../context/ContextProvider';

const RecentEntries = ({ iconss, togglePosition }) => {
  const {
      prevPrompt,
      onsent,
      setRecentPrompt,
    } = useContext(Context)
  
  return (
    <>
    {
      prevPrompt.map((item,index) => {
        return (
          <div
          className={`flex mt-4 px-3 gap-2 rounded-3xl py-[.1vw] hover:bg-[#202020] translate-all duration-300 items-center 
          ${togglePosition === 'left' ? 'text-white' : 'text-black hover:text-white'}`}
        >
          <img className="w-8" style={{ filter: 'invert(1)' }} src={iconss} alt="" />
          <h1  className={` opacity-70`}>{item.slice(0,18)}....</h1>
        </div>
        )
      })
    }
    </>
  );
};

export default RecentEntries;
