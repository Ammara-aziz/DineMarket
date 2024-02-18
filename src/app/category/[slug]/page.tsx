import ProductCard from '@/components/ProductCard'
import React from 'react'
import Products from '@/utils/mock'

function GetProductsByCategory(category: string) {
  return Products.filter((products) => products.category === category)
};


export default function Page({ params }: { params: { slug: string } }) {
  const result = GetProductsByCategory(params.slug)
  return <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">

    {
      result.length > 0 ?
        result.map((product: any) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image}
            category={product.category}
            productCat={product.productCat}
            id={product.id} />
        ))
        : <p className='font-semibold pl-80'>Oops!!!  No Product Available under this category</p>
    }

  </div>
}