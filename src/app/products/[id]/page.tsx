import React from 'react';
import ProductCard from '@/components/ProductCard'
import Products from '@/utils/mock';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from 'react-icons/fi';
import Quantity from '@/components/Quantity';
import ProductOverview from '@/components/ProductOverview';


function GetProductsDetail(id: number | string) {
  return (
    Products.filter((product) => product.id == id)
  )
};

export default function Page({ params }: { params: { id: string } }) {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const result = GetProductsDetail(params.id);
  return (
    <div className="flex flex-wrap justify-evenly mt-16 py-10  bg-gray-50">
      {result.map((product) => (
        <div className='flex flex-col'>
          <div key={product.id} className='flex justify-between gap-6'>
            {/* Left Image */}
            <div>
              <Image src={product.image} alt={product.name} />
            </div>
            {/* Right Content */}
            <div className='p-10'>
              <div>
                <h1 className='text-2xl font-[545] tracking-wider leading-7 font-mono'> {product.name}</h1>
                <h2 className='font-semibold text-xl text-neutral-400'>{product.productCat}</h2>
              </div>
              <div>
                <h3 className='text-sm font-bold tracking-wider  mt-7'>SELECT SIZE</h3>
                {/* Sizes */}
                <div className='flex flex-row gap-9 mt-5'>
                  {
                    sizes.map((pro) => {
                      return (
                        <div className='flex justify-center bg-white text-gray-500  gap-14 h-7 w-7 rounded-full hover:shadow-xl duration-300 '>
                          <span className='flex text-center hover:bg-gray-100 font-bold'>{pro}</span>
                        </div>
                      )
                    })
                  }
                </div>
                {/* Quantity */}
                <div className='gap-9 mt-9 flex flex-row'>
                  <h3 className='font-bold text-lg font-mono gap-6'>Quantity:</h3>
                  <Quantity />
                  {/* Add to Cart */}
                </div>
                <div className='flex flex-row mt-6 gap-5'>
                  <Button className='rounded-none  bg-black border-gray-100 text-base font-bold'>
                    <FiShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button >
                  <h2 className=' font-bold text-3xl font-sans'>${product.price.toFixed(2)}</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Overview */}
          <div className='pr-1 pl-1'>
            <ProductOverview />
          </div>

        </div>
      ))}
    </div>
  );
}
