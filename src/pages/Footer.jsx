import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-lightgreen w-full lg:py-[1rem]' >
        <div className='mx-auto flex flex-col px-[1.5rem] items-center py-[2rem] gap-7 max-w-[70rem] lg:flex-row lg:justify-between lg:px-[4rem]'>
          <div className='flex gap-5 lg:w-1/2'>
            <div>
              <img src="/assets/facebook.png" alt="Facebook" className='h-6' />
            </div>
            <div>
              <img src="/assets/instagram.png" alt="Instagram"  className='h-6' />
            </div>
            <div>
              <img src="/assets/twetter.png" alt="Twitter"  className='h-6' />
            </div>
            <div>
              <img src="/assets/printest.png" alt="Printest"  className='h-6' />
            </div>
            <div>
              <img src="/assets/tiktok.png" alt="Tik Tok"  className='h-6' />
            </div>
            <div>
              <img src="/assets/whatsapp.png" alt="Whatsapp"  className='h-6' />
            </div>
            <div>
              <img src="/assets/youtube.png" alt="Youtube"  className='h-6' />
            </div>
          </div>
          <div className='lg:w-1/2 '>
            <p className='text-white text-center text-xl tracking-wide lg:text-end'>&#169; Start, 2022. All rights reserved.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
