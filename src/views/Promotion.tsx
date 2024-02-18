import React from 'react';
import Image from 'next/image';
import Event1 from "@/components/Assets/image/event1.webp";
import E2 from "@/components/Assets/image/E2.webp";
import Vent3 from "@/components/Assets/image/Vent3.webp";

const Promotion = () => {
    return (
        <section className='pl-[6rem] pt-[0px]'>
            <div className='text-center flex-col gap-[10px] pt-10 mb-[2rem]  w-[884px] h-[71px] '>
                <span className='flex tracking-widest justify-center font-bold w-[884px] h-[28px]  text-[0.79rem] text-[#0062f5] pb-0'>PROMOTIONS</span>
                <h2 className='flex  justify-center pr-0 font-bold text-[32px] tracking-[.03em] leading-10 '>Our Promotions Events</h2>
            </div>
            <div className='flex justify-between gap-[2rem] pt-8'>
                <div className='flex flex-col gap-[1rem] flex-grow-2 flex-shrink-1 '>
                    <div className='flex  justify-between h-[220px] w-[450px]  align-middle pr-2rem pl-2rem tracking-wider text-[#212121] bg-[#d6d6d8] '>
                        <div className='flex flex-col box-border h-[219px] w-[87.97px] pl-6'>
                            <h3 className='flex flex-col font-bold text-[1.75rem] leading-9 h-[150px] w-[87px]'>GET UP TO <span className='flex flex-col font-extrabold text-4xl leading-[45px] '>60%</span></h3>
                            <p className='font-normal text-lg flex leading-[23px] tracking-[.03em] h-[87] w-[69] '>For the summer season</p>
                        </div>
                        <Image src={Event1} alt='pic' className='bg-[#d6d6d8] h-[200px] w-[260px]'></Image>
                    </div>
                    <div className='flex flex-col justify-center align-middle h-[219px] w-[450px] pt-[3rem] pr-[2rem] pb-[2rem] pl-[2rem] bg-[#212121] text-[#fff]'>
                        <h3 className='font-extrabold text-4xl leading-10 mb-[1rem] tracking-[.03]'>GET 30% Off</h3>
                        <p className='font-normal text-sm leading-[18px] tracking-[.03em] '>USE PROMO CODE</p>
                        <button className='font-bold text-[17px] leading-[21px] tracking-[.25em] text-[#fff] bg-[#474747] pt-[.5rem] pr-[2.5rem] pb-[.5rem] pl-[2.5rem] mt-[5px] rounded-lg '>DINEWEEKENDSALE</button>
                    </div>
                </div>
                <div className='flex ml-0  pt-[1rem] pb-[1rem] h-[576px] w-[476px] justify-justify-between align-middle gap-[1rem]'>
                    <div className='flex flex-col justify-between align-middle h-[411px] w-[400px] bg-[#efe1c7] pt-[1.5rem]  '>
                        <div className='ml-[1.1rem] w-[100%] '>
                            <p>Flex Sweatshirt</p>
                            <div className='flex gap-3'>
                                <span className='line-through'>$100.00</span>
                                <span className='font-bold'>$75.00</span>
                            </div>
                        </div>
                        <Image src={E2} alt='pic2' className='bg-[#efe1c7] w-[600px] h-[340px] pt-[1rem]'></Image>
                    </div>
                    <div className='flex flex-col  justify-between align-middle h-[411px] w-[600px] bg-[#d7d7d9] pt-[1.5rem]' >
                        <div className='w-[100%] ml-[1.1rem]'>
                            <p >Flex Push Button Bomber</p>
                            <div className='flex gap-3'>
                                <span className='line-through'>$225.00 </span>
                                <span className='font-bold'>$190.00</span>
                            </div>
                        </div>
                        <Image src={Vent3} alt='pic' className='bg-[#d6d6d8] w-[400px]'></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotion