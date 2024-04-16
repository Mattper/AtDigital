import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = ({question, answer}) => {
    const [open, setOpen] =useState(false);
  return (
    <div className='rounded-[7px] p-6 flex flex-col gap-[13px] bg-[#faf8ff] font-Inter'>

        {/* Question Container */}
        <button onClick={()=> setOpen(!open)} className='flex justify-between gap-10'>
            <span className={`text-[20px]/[28px] text-start font-medium ${open? 'text-Primary' : ''}`}>{question}</span>
            <div className='pt-3 pb-[7px] px-0'>
                {open ? <AiOutlineMinus className='w-[14px] h-[14px] text-Primary'/> : <AiOutlinePlus className='w-[14px] h-[14px]'/> }                       
            </div>
        </button>

        {/* Answer Container */}
        <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${open? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <p className={`text-[16px]/[30px] overflow-hidden ${open? 'text-[#6f6c90]' : ''}`}>{answer}</p>
        </div>
    </div>
  )
}

export default Accordion;
