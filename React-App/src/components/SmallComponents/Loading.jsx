import React from 'react';
import { assets } from '../../assets/assets';
import './loading.css'
const Loading = () => {
  return (
    <div className='flex items-start gap-4'>
      <img className='w-[40px] rounded-full bg-contain' src={assets.meditechlogo} alt="" />
      <div className="flex flex-col items-start gap-3 w-full">
        <hr
          className="w-full h-[20px] border-none rounded-[4px] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff]"
          style={{
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s linear infinite',
          }}
        />
        <hr
          className="w-full h-[20px] border-none rounded-[4px] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff]"
          style={{
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s linear infinite',
          }}
        />
        <hr
          className="w-full h-[20px] border-none rounded-[4px] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff]"
          style={{
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s linear infinite',
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
