import React from 'react'

const ProductOverview = () => {
  return (
    <div className='bg-[#FFF] pt-[2rem] pr-[4rem] pb-[2rem] pl-[4rem] center flex-col gap-8 mt-16'>
      <div className='flex gap-8 flex-grow-[2] flex-shrink border-b-2 border-solid border-[#c4c4c4] relative w-[100%] h-[150px]'>
        <div className='font-extrabold leading-[150px] text-[7.5rem] absolute opacity-0.07 z-[1] text-[#f2f3f7] opacity-70'>Overview</div>
        <h2 className='flex align-middle justify-start flex-col font-bold text-2xl leading-6 text-[#212121] pb-12 z-[2] absolute top-[45%] tracking-wider '>Product Information</h2>
      </div>
      <div className='flex z-[2]'>
        <h4 className='flex flex-grow flex-shrink font-bold text-base leading-5 tracking-wider text-[#666] mr-5'>PRODUCT DETAILS</h4>
        <p className='flex-grow-[2] flex-shrink text-base font-light leading-[26px] text-justify tracking-wider  text-[#212121]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div> , cupiditate doloremque.   A mollitia </div>
          eveniet commodi quis similique! Vitae cupiditate numquam
          <div>ratione dolor perspiciatis voluptatem eos </div>
          sunt quidem ex, ducimus iusto.
        </p>
      </div>
      <div className='flex z-[2]'>
        <h4 className='flex flex-grow flex-shrink font-bold text-base leading-5 tracking-wider text-[#666]  -left-0 mr-28'>PRODUCT CARE</h4>
        <ul className='flex flex-col flex-grow-[2] flex-shrink leading-7 tracking-wider'>
          <li className='font-semibold '>Hand wash using cold water.</li>
          <li className='font-semibold'>Do not using bleach.</li>
          <li className='font-semibold'>Hang it to dry.</li>
          <li className='font-semibold'>Iron on low temperature.</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductOverview
