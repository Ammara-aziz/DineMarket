import { Product } from "./types";
import Vent3 from "@/components/Assets/image/Vent3.webp";
import E01 from "@/components/Assets/image/E01.png";
import E3 from "@/components/Assets/image/E3.png";
import E4 from "@/components/Assets/image/E4.png";
import E5 from "@/components/Assets/image/E5.png";
import E6 from "@/components/Assets/image/E6.png";
import E7 from "@/components/Assets/image/E7.png";
import E8 from "@/components/Assets/image/E8.png";
import E9 from "@/components/Assets/image/E9.png";
import E10 from "@/components/Assets/image/E10.png";
import Feature from "@/components/Assets/image/Feature.webp";



const Products: Product[] = [
    {
        id: 1,
        name: "Flex Sweatpants",
        price: 175.00,
        category: "female",
        productCat: "Pants",
        image: E5
    },

    {
        id: 2,
        name: "Cameryn Sash Tie Dress",
        price: 545.00,
        category: "female",
        productCat: "Dress",
        image: E01
    },
    {
        id: 3,
        name: "Brushed Raglan Sweatshirt",
        price: 195.00,
        category: "female",
        productCat: "Sweater",
        image: E4
    }, {
        id: 4,
        name: "Flex Sweatshirt",
        price: 195.00,
        category: "female",
        productCat: "Sweater",
        image: E3
    },
    {
        id: 5,
        name: "Pink Fleece Sweatpants",
        price: 195.00,
        category: "female",
        productCat: "Pants",
        image: E6
    }, {
        id: 6,
        name: "Lite Sweatpants",
        price: 150.00,
        category: "female",
        productCat: "Pants",
        image: E7
    }, {
        id: 7,
        name: "Brushed Bomber",
        price: 225.00,
        category: "female",
        productCat: "Jackets",
        image: E9
    }, {
        id: 8,
        name: "Muscle Tank",
        price: 75.00,
        category: "female",
        productCat: "T Shirts",
        image: E8
    }, {
        id: 9,
        name: "Raglan Sweatshirt",
        price: 195.00,
        category: "female",
        productCat: "Sweater",
        image: E10
    },
    {
        id: 10,
        name: "Flex Push Button Bomber",
        price: 190.00,
        category: "male",
        productCat: "Jackets",
        image: Vent3
    }, {
        id: 11,
        name: "Imperial Alpaca Hoodie",
        price: 525.00,
        category: "female",
        productCat: "Jackets",
        image: Feature
    },
];
export default Products;
