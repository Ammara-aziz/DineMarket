import ProductCard from '@/components/ProductCard'
import React from 'react'
import Products from '@/utils/mock'

const AllProducts = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
            {Products.map((product: any) => (
                <ProductCard
                    key={product.id}
                    title={product.name}
                    price={product.price}
                    img={product.image}
                    category={product.category}
                    productCat={product.productCat}
                    id={product.id} />
            ))
            }
        </div>
    )
}
export default AllProducts