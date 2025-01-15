import React from 'react'
import { assets } from '../../assets/assets'
const Title = ({title,icons}) => {
  return (
    <div className='flex justify-center gap-2 items-center'>
       <h1 className='text-[1vw] font-[futura] uppercase'>{title}</h1>
      <img className='w-8' src={icons} alt="" />
    </div>
  )
}

export default Title
