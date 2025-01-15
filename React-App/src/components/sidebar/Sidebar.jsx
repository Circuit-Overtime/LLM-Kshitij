import React, { useContext, useState } from 'react';
import { Drawer } from 'antd';
import { assets } from '../../assets/assets';
import Title from '../SmallComponents/Title';
import RecentEntries from '../SmallComponents/RecentEntries';
import CustomButtons from '../SmallComponents/CustomButtons';
import ToggleButton from '../SmallComponents/ToggleButton'; // Adjust the path accordingly
import { Context } from '../../context/ContextProvider';

const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [togglePosition, setTogglePosition] = useState("right"); // Default to light mode
  const {
    prevPrompt,
    onsent,
    setRecentPrompt,
  } = useContext(Context)

  const togglePlacement = () => {
    setTogglePosition(togglePosition === 'left' ? 'right' : 'left'); // Only toggle between light and dark mode
  };

  return (
    <div className={`sidebar w-10`}>
      <div className="hover:bg-[#3b3a3a] w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300">
        <img
          onClick={() => {
            setVisible(true);
          }}
          className="w-5"
          src={assets.menu_icon}
          style={{ filter: 'invert(1)' }}
          alt=""
        />
      </div>

      <Drawer
        visible={visible}
        title={<Title title={"Meditech"} icons={assets.meditechlogo} />}
        placement="left"
        onClose={() => setVisible(false)}
        style={{
          backgroundColor: togglePosition === 'left' ? '#171717' : '#f4f4f4', // Dark mode or light mode
          color: togglePosition === 'left' ? '#fff' : '#000', // Text color
        }}
        closeIcon={
          <span style={{ color: togglePosition === 'left' ? '#fff' : '#000' }}>
            <img src={assets.gemini_icon} alt="" />
          </span>
        }
      > 
        {/* Toggle Placement Button */}
        <ToggleButton togglePlacement={togglePlacement} togglePosition={togglePosition} />

        {/* New Chat */}
        <div className={`flex mt-5 max-w-[50%] items-center px-5 gap-4 py-[0.3vw] hover:bg-[#202020] translate-all duration-300 rounded-3xl ${togglePosition === 'left' ? 'text-white hover:text-white' : 'text-black hover:text-white'}`}>
          <img className="w-5" src={assets.plus_icon} alt="" />
          <p className="font-[700] text-[.7vw]">New Chat</p>
        </div>

        <div className="w-full px-5 overflow-auto h-[40%] mt-20">
          <p className={`font-[700] text-[.7vw] ${togglePosition === 'left' ? 'text-white hover:text-white' : 'text-black hover:text-blue-700'}`}>Recent</p>
          <RecentEntries togglePosition={togglePosition} iconss={assets.message_icon} />
        </div>

        <div className="other-activity mt-20">
          <CustomButtons togglePosition={togglePosition} styless={"gap-2"} title={"Help"} icons={assets.question_icon} onclick={() => console.log("hello")} />
          <CustomButtons togglePosition={togglePosition} styless={"gap-2"} title={"History"} icons={assets.history_icon} onclick={() => console.log("hello")} />
          <CustomButtons togglePosition={togglePosition} styless={"gap-2"} title={"Settings"} icons={assets.setting_icon} onclick={() => console.log("hello")} />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center mt-[4vw] gap-2">
            <div className={`w-2 h-2  rounded-full ${togglePosition === 'left' ? "bg-white" : "bg-[#202020]"
             }`}></div>
            <h1 className={togglePosition === 'left' ? 'text-white hover:text-blue-500' : 'text-black hover:text-blue-700'}>Developed by ©Genx Estd 2025</h1>
          </div>
          <h1 className={`ml-4 ${togglePosition === 'left' ? 'text-white hover:text-blue-500' : 'text-black hover:text-blue-700'}`}>Kolkata, West Bengal</h1>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
