import React from 'react'

const ContactUs = () => {
  return (
    <section id='contact' className='bg-gray-50 w-full lg:py-[1rem]'>
      <div className='flex flex-col px-[1rem] py-[2rem] gap-10 max-w-[70rem] mx-auto items-center lg:py-0 lg:flex-col lg:justify-center lg:gap-0'>
        <div className='flex flex-col'>
          <p className='text-center font-bold text-2xl' >Contact Us</p>
          <p className='text-center text-lg font-light'>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
        </div>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between'>
          <div className='lg:w-1/2'>
            <img src="/public/assets/map.jpg" alt="map" className='rounded aspect-video lg:aspect-square lg:object-contain object-center' />
          </div>
          <div className='lg:w-1/2 flex flex-col gap-5 w-full px-[1rem] lg:max-w-[25rem]'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' id='name' className='bg-gray-200 border focus:outline-0 rounded px-[0.5rem] py-[0.2rem]' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' id='email' className='bg-gray-200 border focus:outline-0 rounded px-[0.5rem] py-[0.2rem]' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="message">Message</label>
              <textarea type="text" name='message' id='message' rows={5}  className=' w-full bg-gray-200 border focus:outline-0 rounded px-[0.5rem] py-[0.2rem] resize-none' />
            </div>
            <div>
              <button className='bg-black text-white w-full px-[1rem] py-[0.5rem] rounded text-lg font-semibold'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
