"use client"
import ProductCard from "@/components/ProductCard";
import React from 'react';
import Products from "@/utils/mock";


const ProductLists = () => {
    const ProductChunks = Products.slice(0, 3)
    console.log(ProductChunks);

    return (
        <div className="flex justify-evenly">
            {ProductChunks.map((product: any) => (
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
export default ProductLists