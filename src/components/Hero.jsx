import React from 'react'

const Hero = () => {
  return (
    <div className='absolute'>

        {/* Image Container */}
        <div className='relative top-[77px] bg-[#d9d9d9] md:w-[768px] md:h-[448px] w-[375px] h-[218.75px] lg:w-[1200px] lg:h-[700px] xl:w-[1440px] xl-h[700px]'>
          <img src="./Hero.jpeg" alt="HeroImage" className=' absolute w-[462px] h-[327px] -top-[106px]
                                                                      md:w-[946px] md:h-[670px] md:-top-[215px]
                                                                      lg:w-[1479px] lg:h-[1048px] lg:-top-[336px]
                                                                      xl:w-[1440px] xl:h-[763px] xl:-top-[40px] 
                                                                      object-cover' loading='lazy'
          />
        </div>
        
        {/* Text Container */}
        <div className='absolute z-10 w-[375px] md:w-[768px] lg:w-[622px] top-[295px] md:top-[525px] lg:top-[354px] lg:left-[60px] lg pt-6 pb-8 px-5 md:px-10  flex flex-col gap-5 bg-gradient-to-r from-Dark_2 to-Analogous_2 '>
            <h1 className='font-bold font-Inter capitalize  text-Text_white text-[36px]/[36px] md:text-[48px]/[48px]'>We crush your competitors, goals, and sales records - without the B.S.</h1>
            <button className='bg-Secondary self-start py-3 px-5 uppercase text-Text_white text-[14px]/[14px] rounded-[4px] font-bold font-Inter'>Get free consultation</button>
        </div>
    </div>
  )
}

export default Hero;