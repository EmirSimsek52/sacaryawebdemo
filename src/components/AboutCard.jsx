import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col bg-[white] text-black hover:text-white border-inherit  justify-center items-center text-left rounded-2xl py-5 px-8 hover:bg-[#9F32B2] duration-300'>
    <div>
      <div className='bg-[#9F32B2] text-white inline-flex p-2 rounded-full'>
        {props.icon}
      </div>
      <h3 className='text-xl   font-normal py-2 '>{props.heading}</h3>
  
    </div>
  </div>
  )
}

export default AboutCard