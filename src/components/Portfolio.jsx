import React from 'react'
import { PortfolioData } from '../data/data'

const Portfolio = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:py-[2rem] lg:gap-10'>
      {
        PortfolioData.map((item, index) =>(
          <div className='border rounded overflow-hidden'>
            <img src={item.thunbnail} alt="Thumbnail" className='aspect-video' />
          </div>
        ))
      }
    </div>
  )
}

export default Portfolio
