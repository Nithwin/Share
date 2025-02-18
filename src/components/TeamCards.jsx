import React from 'react'
import { TeamCardsData } from '../data/data'
const TeamCards = () => {
  return (
    <div className=' flex p-[2rem] justify-center flex-col gap-10 lg:flex-row'>
      {
        TeamCardsData.map((item, index) => (
          <div key={index} className='bg-white h-fit shadow-2xl  flex flex-col items-center gap-5 p-[2.5rem] rounded lg:p-[1.5rem] justify-between'>
          <div className="size-[13rem] rounded-full object-center border-2 overflow-hidden p-10">
            <img src={item.profile} alt="Person" className='' />
          </div>
          <div className='w-full px-[1rem]'>
            <p className='text-[1.6rem] text-start font-bold lg:text-[1.4rem]'>{item.name}</p>
            <p className='text-lg font-light text-start tracking-widest' >{item.position}</p>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default TeamCards
