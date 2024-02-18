"use client"
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";


export default function ProductCard(props: {
    title: string;
    price: number;
    img: StaticImageData;
    category: string;
    productCat: string;
    id: number
}) {
    return (
        <div className='flex grid-cols-3 grid-rows-3 gap-4 p-4 justify-evenly '>
            <Link href={`/products/${props.id}`}>
                <div className="py-5">
                    <Image src={props.img} alt={"product"} />
                    <h3 className="font-bold text-lg mt-3">{props.title}</h3>
                    <p className="font-bold text-lg">${props.price}.00</p>
                    <p className="font-semibold text-lg font-mono text-gray-400">{props.productCat}</p>

                </div>
            </Link>
        </div>
    );
}
