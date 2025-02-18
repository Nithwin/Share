import React from 'react'

const Brands = () => {
  return (
    <div className='flex flex-col px-[2rem] py-[2rem] gap-10 max-w-[70rem] mx-auto '>
        <div className='flex flex-col gap-4'>
          <p className='text-center uppercase tracking-widest font-semibold text-lightgreen'>partners</p>
          <p className='font-bold text-2xl text-center'>Lorem Ipsum Dolor</p>
          <p className='text-2xl text-center font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className='w-full'>
          <ul className='flex flex-col w-full items-center gap-8 lg:flex-row ' >
            <li className=''>
              <img src="/assets/Google-01.png" alt="Google" className=' w-[12rem]' />
            </li>
            <li>
              <img src="/assets/Microsoft-01.png" alt="Microsoft"  className='w-[12rem]' />
            </li>
            <li>
              <img src="/assets/Airbnb-01.png" alt="Airbnb"  className='w-[12rem]'/>
            </li>
            <li>
              <img src="/assets/Facebook-03.png" alt="Facebook" className='w-[12rem]' />
            </li>
            <li>
              <img src="/assets/Spotify-01.png" alt="Spotify" className='w-[12rem]' />
            </li>
          </ul>
        </div>
        <div className='mx-auto'>
          <button className=' bg-black rounded text-white px-[2rem] py-[0.5rem] text-xl' >Learn More</button>
        </div>
      </div>
  )
}

export default Brands
