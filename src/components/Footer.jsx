import React from 'react'

export const Footer = () => {
  return (
    <footer className='absolute top-[2744px] lg:top-[2183px] md:top-[2088px] xl:top-[2319px] w-[375px] md:w-[768px] lg:w-[1200px] xl:w-[1440px] bg-Primary pt-10 p-5 md:px-10 lg:px-[60px] xl:px-20 text-Text_white flex flex-col gap-10'>

        {/* Main Container */}
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-28 lg:justify-between'>

            {/* Logo & About */}
            <div className='flex flex-col gap-5 items-start md:w-[413px]'>
                <img src="./White_Logo.png" alt="AT DIGITAL Logo" className='' />
                <p className='text-base/[19.2px] font-Lato'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>

            {/* Tech & Services */}
            <div className='flex flex-col items-start gap-10 md:flex-row md:gap-20'>
                {/* Tech */}
                <div className='flex flex-col gap-3'>
                    <h3 className='text-[23px]/[25.4px] font-semibold'>Our Technologies</h3>
                    <div className='text-sm/[17px] font-medium flex flex-col gap-3'>
                        <span>ReactJs</span>
                        <span>Gatsby</span>
                        <span>NextJs</span>
                        <span>NodeJs</span>
                    </div>
                </div>

                {/* Services */}
                <div className='flex flex-col gap-3'>
                    <h3 className='text-[23px]/[25.4px] font-semibold'>Our Services</h3>
                    <div className='text-sm/[17px] font-medium flex flex-col gap-3'>
                        <span>Social Media Marketing</span>
                        <span>Web & MObile App Development</span>
                        <span>Data & Analysis</span>
                    </div>
                </div>               
            </div>           
        </div>

        {/* Terms & Conditions */}
        <div className='flex flex-col self-center gap-2 w-full lg:max-w-[630px]'>
            <hr className='text-Text_white'/>
            <div className='flex gap-4 items-center justify-center font-medium text-sm/[17px]'>
                <span>Privacy Policy</span>
                <span>|</span>
                <span>Terms & Conditions</span>
            </div>
        </div>

    </footer>
  )
}
