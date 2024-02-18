import React from "react";
import Logo from "@/components/Assets/icon/Logo-dine.webp";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between gap-5 pl-[6rem] px-28 py-7">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" className=" h-6 w-36"></Image>
        </Link>
        <ul className="flex flex-row justify-between text-center gap-9 font-thick  p-3 font-normal text-md">
          <Link href={`/category/female`}>
            <li>Female</li>
          </Link>
          <Link href={`/category/male`}>
            <li>Male</li>
          </Link>
          <Link href={`/category/kids`}>
            <li>Kids</li>
          </Link>
          <Link href={`/products`}>
            <li className="gap-0">All Products</li>
          </Link>
        </ul>
        <div className="flex flex-col gap-1 relative">
          <Search className="text-gray-600 h-[1em] w-[1em] absolute bottom-1 pl-[0.7]" />
          <Input
            className="h-[1.9em] w-[22em] pl-7"
            type="text"
            placeholder="What you looking for"
          />
        </div>
        <span className="center bg-[#f1f1f1] shadow rounded-full   h-12 w-12 text-xl relative">
          <div className="center w-4 h-4 rounded-full bg-red-500 absolute right-0 top-1 ">
            <p className="text-white text-xs">0</p>
          </div>
          <FiShoppingCart />
        </span>
      </header>
    </>
  );
};

export default Header;
