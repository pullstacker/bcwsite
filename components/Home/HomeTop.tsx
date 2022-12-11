import clsx from "clsx";
import Button from "components/Button";
import Image from "next/image";
import React from "react";
import { homePaddingX } from "utils";

const HomeTop = () => {
  return (
    <div className={clsx("flex items-center", homePaddingX)}>
      <div className="flex flex-col flex-1 z-10">
        <span className="text-white text-[32px] md:text-[48px] lg:text-[65px] uppercase text-center md:text-start">
          <span className="text-secondary">Private</span> and Consortium
          Infrasctructure
        </span>
        <div className="my-[43px] heading-sl text-white text-center md:text-start">
          This is the subtitle describe about the display title what
          blockchainworks can do
        </div>
        <Button label="Let's Get Started" className={"self-center md:self-start"} />
      </div>
        <div className="w-[200px] right-1/4 opacity-40 flex xl:hidden h-[200px] absolute">
          <Image src="/blockchain.svg" fill alt="blockchain" />
        </div>
      <div className="xl:flex flex-1 relative hidden">
        <div className="w-full h-[485px]">
          <Image src="/blockchain.svg" fill alt="blockchain" />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
