import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    productCat: string;
    image: string | StaticImageData;
}