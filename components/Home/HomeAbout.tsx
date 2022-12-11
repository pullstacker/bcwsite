import Image from "next/image";
import React from "react";

const HomeAbout = () => {
  return (
    <div className="flex flex-row relative bg-black-soft">
      <div className="lg:flex flex-1 hidden">
        <div className="relative w-full h-full">
          <Image src="/about.svg" className="object-cover" fill alt="about" />
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-[108px] pb-[69px]">
        <div className="pl-[40px] pr-[40px] md:pl-[90px] md:pr-[90px] lg:pr-[200px]">
          <div className="uppercase text-[28px] md:text-[32px] lg:text-[48px] font-cmedium text-secondary text-center lg:text-start">About</div>
          <div className="uppercase text-[28px] md:text-[32px] lg:text-[48px] font-cmedium text-secondary text-center lg:text-start">Blockchainworks</div>
          <div className="text-white mt-8 text-btnl md:heading-sl text-center lg:text-start">
            This is the subtitle describe about the display title what
            blockchainworks can do
          </div>
          <div className="text-white mt-2 text-btnl md:heading-sl text-center lg:text-start">
            This is the subtitle describe about the display title what
            blockchainworks can do
          </div>
        </div>
        <Image
          className="self-end hidden lg:flex"
          src="/blockchain-2.svg"
          height={275}
          width={189}
          alt="blockchain2"
        />
      </div>
    </div>
  );
};

export default HomeAbout;
