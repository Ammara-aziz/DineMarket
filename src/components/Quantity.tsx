"use client"
import React, { useState } from 'react';


const Quantity = () => {
  const [num, setNum] = useState(1)

  return (
    <div className='flex flex-row gap-2'>
      <button className='center h-9 w-9 rounded-full text-sm  bg-neutral-100  text-center' onClick={() => {

        setNum(num <= 1 ? 1 : num - 1)
      }}>__</button>
      <span className='center flex-col '>{num}</span>
      <button className='center h-9 w-9 rounded-full border-2 border-black text-3xl font-extralight   text-center '
        onClick={() => {
          setNum(num + 1)
        }}>+
      </button>
    </div>
  )
}

export default Quantity