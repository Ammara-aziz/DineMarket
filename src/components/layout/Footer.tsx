import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Logo from "@/components/Assets/icon/Logo-dine.webp";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="block bg-[#fff]">
        <div className="grid grid-cols-4 box-border px-28 pt-48">
          <div className="flex flex-col justify-between w-[80%] ">
            <Image
              className="flex  w-180px h-[30px]  items-center"
              src={Logo}
              alt="logo"
            ></Image>
            <p className="pt-8 font-normal text-[1rem] text-[#666] leading-[22px]">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex gap-[1rem] pt-8">
              <div className="flex items-center justify-center pt-10px pr-12px pb-10px pl-12px bg-[#f1f1f1] rounded-[10px] cursor-pointer box-border h-[40px] w-[50px]">
                <FaTwitter className="h-[20] w-[20]" />
              </div>
              <div className="flex items-center justify-center pt-10px pr-12px pb-10px pl-12px bg-[#f1f1f1] rounded-[10px] cursor-pointer box-border h-[40px] w-[50px]">
                <GrFacebookOption className="h-[20px] w-[20px]" />
              </div>
              <div className="flex items-center justify-center pt-10px pr-12px pb-10px pl-12px bg-[#f1f1f1] rounded-[10px] cursor-pointer box-border h-[40px] w-[50px] ">
                <FaLinkedinIn className="h-[20px] w-[20px]" />
              </div>
            </div>
          </div>
          <div className="pl-7 ">
            <h3 className="font-bold text-lg leading-5 tracking-[.02em] text-[#666]">
              Company
            </h3>
            <ul className="block pt-5">
              <li className="font-normal text-base  text-[#666]">About</li>
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                Terms of Use
              </li>
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                Privacy Policy
              </li>
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                How it Works
              </li>
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-lg leading-5 tracking-[.02em] text-[#666]">
              Support
            </h3>
            <ul className="block pt-5">
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                Support Carrer
              </li>
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                24h Service
              </li>
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                Quick Chat
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-lg leading-5 tracking-[.02em] text-[#666]">
              Contact
            </h3>
            <ul className="block pt-5">
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                Whatsapp
              </li>
              <li className="font-normal text-base leading-[2.5rem] text-[#666]">
                Support 24h
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 box-border mt-[6rem] border-t-[1px] border-solid border-[#666] ">
          <p className="font-normal text-base leading-[22px] text-[#666] mt-[1.5rem] mb-[1.5rem] ml-[8rem] mr-[8rem]">
            Copyright © 2022 Dine Market
          </p>
          <p className="font-normal text-base leading-[22px] text-[#666] mt-[1.5rem] mb-[1.5rem] ml-[8rem] mr-[8rem]">
            Design by.{" "}
            <span className="font-bold text-[1rem] leading-4 text-black">
              Ammara Gul
            </span>{" "}
          </p>
          <p className="font-normal text-base leading-[22px] text-[#666] mt-[1.5rem] mb-[1.5rem] ml-[8rem] mr-[8rem]">
            Code by.{" "}
            <span className="font-bold text-[1rem] leading-4 text-black">
              Ammara-aziz on github
            </span>
          </p>{" "}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
