import React from 'react'
import Accordion from './Accordion';

const FAQs = () => {
    const faqList =[
        {
            id:1,
            Question : "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
            Answer : "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." 
        },
        {
            id:2,
            Question : "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
            Answer : "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
        },
        {
            id:3,
            Question : "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
            Answer : "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." 
        },
    ]

  return (
    <div className='absolute top-[1915px] lg:top-[1711px] xl:top-[1847px] md:top-[1514px] md:left-7 left-[20px] lg:left-[152px] xl:left-[297px] flex flex-col gap-7 w-[335px] md:w-[686px] lg:w-[896px] '>
        <h3 className='text-[27px]/[33px] text-center font-semibold font-Poppins text-Primary'>Frequently asked questions</h3>
        <div className='flex flex-col gap-[15px]'>
            {/* Accordion List */}         
            {faqList.map((item) => (
                <Accordion key={item.id} question={item.Question} answer={item.Answer}/>
            ))}

        </div>
    </div>
  )
}

export default FAQs;
