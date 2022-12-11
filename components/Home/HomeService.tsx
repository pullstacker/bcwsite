import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { homePaddingX } from "utils";

const ItemHomeService = ({ image = "/01.svg" }) => {
  return (
    <div className="p-8 pb-12 bg-black-soft rounded-2xl border-gradient lg:self-start lg:max-w-[389px]">
      <Image
        src={image}
        width={38}
        height={49}
        alt="handhsake"
        className="mb-8"
      />
      <span className="text-white text-[24px] md:text-[32px] font-clight leading-10">
        Day Free Sharing Session
      </span>
    </div>
  );
};

const HomeService = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row pt-[95px] pb-[110px] bg-black-soft-2">
      <Image
        src={"/blockchain-4.svg"}
        className="opacity-40 lg:opacity-100 absolute -mt-8"
        height={275}
        width={190}
        alt="blockchain-4"
      />
      <div className={clsx("flex flex-col flex-1 pl-[40px] md:pl-[100px] lg:pl-[174px] z-10 lg:pr-0", homePaddingX)}>
        <ItemHomeService />
        <div className="mb-8" />
        <div className="xl:ml-[109px] lg:self-start">
          <ItemHomeService image="/02.svg" />
        </div>
        <div className="mb-8" />
        <ItemHomeService image="/03.svg" />
      </div>
      <div className={clsx("flex flex-col flex-1", " pl-[40px] md:pl-[100px] lg:pl-4 mt-20 lg:mt-0 mb-16 lg:mb-0 relative")}>
        <div className="pr-[40px] md:pr-[100px] lg:pr-[174px] z-10">
          <div className="text-[32px] sm:text-[48px] text-center md:text-start uppercase text-secondary">
            Proof of <div>concept</div> <div>development</div>{" "}
            <div>service</div>
          </div>
          <div className="text-white text-center md:text-start text-btnl md:heading-sl mt-12 mb-6">
            This is the subtitle describe about the display title what
            blockchainworks can do
          </div>
        </div>

        <Image
          src={"/blockchain-5.svg"}
          className="self-end mr-16 opacity-30 md:opacity-100 absolute md:block bottom-0"
          height={304}
          width={328}
          alt="blockchain-4"
        />
      </div>
    </div>
  );
};

export default HomeService;
