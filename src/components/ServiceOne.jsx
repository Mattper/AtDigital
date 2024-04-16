import React from 'react'

const ServiceOne = () => {
  return (
    <div className='absolute xl:w-[1064px] xl:top-[857px] xl:left-[188px] xl:gap-[108px] md:w-[688px] lg:w-[896px] top-[649px] md:top-[843px] md:left-10 lg:top-[857px] lg:left-[152px]  md:flex-row left-5 flex flex-col items-center justify-center gap-5 w-[335px]'>
        <img src="./image2.png" alt="" className='w-[275px] h-[275px] lg:w-[346px] lg:h-[346px] xl:w-[414px] xl:h-[414px]' />

        {/* text container */}
        <div className='flex flex-col gap-5 font-Inter md:w-[768px]'>
          <h3 className='font-semibold font-Poppins text-[27px]/[33px] text-center md:text-start text-Primary'>Web & Mobile App Development</h3>
          <p className='text-[16px]/[19.36px] text-center md:text-start'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <button className='py-3 px-5 rounded bg-Secondary uppercase mx-auto md:mx-0 md:w-fit text-Text_white font-bold text-sm/[14px]'>Learn  more</button>
        </div>
    </div>
  )
}

export default ServiceOne;
