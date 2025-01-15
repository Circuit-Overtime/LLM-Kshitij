import React, { useContext } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { assets } from '../../assets/assets'
import Cards from '../SmallComponents/Cards'
import SearchBox from '../SmallComponents/SearchBox'
import Greeting from '../SmallComponents/Greeting'
import { Context } from '../../context/ContextProvider'
import './main.css'
import Loading from '../SmallComponents/Loading'

const Main = () => {
  const {prevPrompt,setPrevPrompt,onsent,setRecentPrompt,recentPrompt,showResult,loading,result,input,setInput} = useContext(Context)
  const handlerInputChange = (e) => {
    setInput(e.target.value);

    
  } 
  const sendInput = () => {
    onsent()
    
 }
  return (
    <div className='bg-[#202020] px-4 py-4 h-[100vh] w-full'>
    <div className='flex items-center relative  gap-5'>
        <Sidebar />
        <div className='flex-col '>
         <div className='flex gap-2 leading-tight items-center'>
         <h1 className='text-[1.2vw] font-[futura] font-[500] text-white'>Meditech</h1>
         <img src={assets.meditechlogo} className='w-7 h-7' alt="" /></div>
         <h1 className='text-white font-[poppins] opacity-70'>1.0.0 genx</h1>
        </div>
        <div className='right-2 top-2 rounded-full absolute'>
            <img src={assets.user_icon} className='w-12 rounded-full' alt="" />
        </div>
        </div>
    <div className='main-container max-w-[900px] m-auto'>

      {
        !showResult ? 
        <>
        <Greeting/>
     <div className='cards mt-[2vw] flex justify-start gap-10 '>
        <Cards  title={"improve readability of the following ..."} iconsss={assets.code_icon}/>
        <Cards  title={"Suggest you best doctors near you ....."} iconsss={assets.compass_icon}/>
        <Cards  title={"What are the best practices for managing mental health and stress?"} iconsss={assets.question_icon}/>
        <Cards  title={"What are the long-term effects of [specific medication, substance, or condition]?"} iconsss={assets.bulb_icon}/>
        
     </div>
        </> : 
        <>
       <div className='result-container  flex flex-col gap-10 overflow-y-scroll px-[5%] h-[70vh]'>
         {/* recentprompt */}
         <div className='recent-propmt'>
          <div className='flex items-start gap-4'>
          <img className='w-[40px] bg-cover h-10 rounded-full'  src={assets.user_icon} alt="" />
          <p className='text-white leading-loose font-[400]'>{recentPrompt}</p>
          </div>
          </div>
        {/* ai response */}
        {
          loading ? <>
         <Loading/>
          </> : <>
          <div className='ai response '>
          <div className='flex  items-start  gap-5'>
          <img className='w-[40px] bg-container  rounded-full'  src={assets.meditechlogo} alt="" />
          <p  dangerouslySetInnerHTML={{__html:result}} className='text-white leading-loose font-[400]'></p> 
          
          </div>
          </div>
          </>
        }

        </div> 
        
        </>
      }
   


     {/* input */}
    <div className="bottom  rounded-full absolute m-auto w-[100%] max-w-[900px] bottom-10">
       <SearchBox values={input} onchange={handlerInputChange} onclickSend={sendInput}  />
       <p className='text-[#ddd] text-[0.6vw] ml-[8vw] mt-[1vw] opacity-70 '>Meditech AI Disclaimer: Meditech AI offers medical insights and is not a substitute for professional medical advice.</p>
    </div>
    
    </div>
    </div>

  )
}

export default Main
