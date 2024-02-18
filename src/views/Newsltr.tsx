import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Newsltr = () => {
    return (
        <section className='pt-[6rem] pr-[4rem]  flex flex-col justify-center align-middle items-center relative z-1'>
            <div className='flex justify-center font-extrabold text-[7.5rem] leading-[151px] absolute z-[-1] text-[#f2f3f7] '>Newsletter</div>
            <h1 className='mb-[1rem] font-bold text-[2rem] leading-10 text-black'>Subscribe Our Newsletter</h1>
            <p className='mb-[2rem] font-light leading-[26px]'>Get the latest information and promo offers directly</p>
            <div className="flex w-full max-w-sm items-center space-x-2 rounded-none">
                <Input className='pt-10px pr-120px pb-10px pl-20px' type="email" placeholder="Input email address" />
                <Button type="submit">Subscribe</Button>
            </div>
        </section>
    )
}

export default Newsltr