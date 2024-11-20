import React from 'react'
import { quotes } from '../assets'

const Feedback = ({ content, name, title, img, index }) => {
  return (

    <div
      key={index}
      className="carousel-item text-center relative w-80 h-80 snap-start"
      >
    <a
      href={"#"}
      className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
      style={{ backgroundImage: `url(${img})` }}>
                  <img
                    src={img}
                    alt={title}
                    className="w-full aspect-square hidden"
                  />
    </a>

    <a href={"#"} 
      className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10">
        <h3 className="text-white py-6 px-3 mx-auto text-xl">
          {name}, {title} 
          <br className='sm:block hidden'/>
          <span className="text-[14px] font-normal quotation">{content}</span>
        </h3>
    </a>
    </div>

    // <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    //   <img
    //     src={quotes}
    //     alt='double-quotes'
    //     className='w-[42px] h-[27px] object-contain'
    //   />
    //   <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
    //     {content}
    //   </p>
    //   <div className='flex flex-row'>
    //     <img
    //       src={img}
    //       alt={name}
    //       className='w-[48px] h-[48px] rounded-full'
    //     />
    //     <div className='flex flex-col ml-4'>
    //       <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
    //       <p className='font-poppins font-normal text-[16px] leading-[24px] text-white'>{title}</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Feedback
