import Heero from "@/components/Assets/image/Heero.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Feature1 from "@/components/Assets/image/Featured1.webp";
import Feature2 from "@/components/Assets/image/Featured2.webp";
import Feature3 from "@/components/Assets/image/Featured3.webp";
import Feature4 from "@/components/Assets/image/Featured4.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex pt-3 gap-0">
      {/* Left div */}
      <div className="flex flex-col flex-1 p-20 gap-6">
        <Badge className="text-[#0000ff] bg-[#e1edff] rounded-md h-10 w-[120px] align-middle justify-center font-semibold text-md py-4">
          Sale 70%
        </Badge>
        <h1 className="text-[#212121]  gap-10 scroll-m-20  font-extrabold tracking-widest text-6xl leading-[55px] ">
          An Industrial <div> Take on </div> Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can{" "}
          <div>beat your outfit as long as you wear </div>Dine outfits.
        </p>
        <div className="flex flex-none w-[35%]">
          <Link href="/products">
            <Button className=" p-[1rem]  text-[#fff] bg-[#212121] text-base font-semibold h-[72px] w-[156px] rounded-none box-border border-slate-500  gap-[0.5rem]">
              <FiShoppingCart />
              Start Shopping
            </Button>
          </Link>
        </div>

        <div className="flex flex-row text-[24px] flex-1 gap-7 pl-0 px-20 h-[102px] w-[100]">
          <Image src={Feature1} alt="img" className="h-[40px] w-[120]"></Image>
          <Image className="h-[40px] w-[110]" src={Feature2} alt="img"></Image>
          <Image className="h-[40px] w-[110]" src={Feature3} alt="img"></Image>
          <Image className="h-[40px] w-[110]" src={Feature4} alt="img"></Image>
        </div>
      </div>

      {/* Right div */}
      <div className="flex-5 justify-center items-center  pt-0 w-[600px] h-[600px] rounded-[50%] bg-[#ffece3]">
        <Image
          src={Heero}
          alt="hero"
          className="absolute justify-center items-center w-[600px] h-[620px]"
        ></Image>
      </div>
    </section>
  );
};
export default Hero;
