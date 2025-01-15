import React from 'react';
import TypingEffect from 'react-typing-effect';

const Greeting = () => {
  const phrases = [
    'How Can I Help You Today ?',
    'What Are You Looking For?',
    'Feel Free to Ask Anything!',
    'Your Health is My Priority!',
    'Let’s Talk About Symptoms!'
  ];

  return (
    <div className="greet mt-[8vw] text-[#4f4e4e] text-[3vw] leading-tight opacity-80 font-[poppins]">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d7ff6] via-[#ffffff]">
        Hello, Patients.
      </p>
      
      <TypingEffect
        text={phrases}
        speed={100}  // Speed at which each character appears
        eraseDelay={1500}  // Delay before erasing each sentence
        typingDelay={500}  // Delay before typing starts
        cursor="|"  // Custom cursor style
        eraseSpeed={50}  // Speed at which text erases
        displayTextRenderer={(text, i) => {
          return (
            <p className="text-[#ffffff] ">{text}</p>
          );
        }}
      />
    </div>
  );
};

export default Greeting;
