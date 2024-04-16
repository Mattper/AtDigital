import React from 'react'

const ServiceTwo = () => {
  return (
    <div className='absolute md:w-[688px] lg:w-[896px] xl:w-[1064px] top-[1281px] md:top-[1178px] md:left-10 lg:top-[1283px] xl:top-[1351px] xl:left-[188px] lg:left-[152px] xl:gap-[108px] md:flex-row-reverse left-5 flex flex-col items-center justify-center gap-5 w-[335px]'>
        <img src="./image3.png" alt="" className='w-[275px] h-[276px] lg:w-[346px] lg:h-[346px] xl:w-[414px] xl:h-[416px]' />
        {/* Text Container */}
        <div className='flex flex-col gap-5 font-Inter'>
          <h3 className='font-semibold text-[27px]/[33px] text-center md:text-start text-Primary font-Poppins'>Digital Strategy Consulting</h3>
          <p className='text-[16px]/[19.36px] text-center md:text-start'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <button className='py-3 px-5 rounded bg-Secondary uppercase mx-auto md:mx-0 md:w-fit text-Text_white font-semibold text-sm/[14px]'>Learn  more</button>
        </div>
    </div>
  )
}

export default ServiceTwo;