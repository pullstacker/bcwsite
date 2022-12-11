import clsx from "clsx";
import Button from "components/Button";
import Image from "next/image";
import React from "react";
import { homePaddingX } from "utils";

const CardLearnMore = () => {
  return (
    <div className="py-6 px-8 bg-black-soft rounded-2xl border-[0.76px] border-white">
      <div className="flex items-center mb-4">
        <Image src="/indeed.svg" height={111} width={111} alt="indeed" />
        <span className="heading-ll ml-8 text-white">Indeed.io</span>
      </div>
      <div className="text-white heading-sl mb-6">
        Inded as Indonesia DID - Decentrelize Identifier, Which applies the
        concept of self-Sovereign identity ehthereun
      </div>
      <Button label="Learn More" className={"bg-white px-8 h-[44px]"} labelClassName="text-secondary"/>
    </div>
  );
};

const HomePresent = () => {
  return (
    <div className="pt-[111px] pb-[139px]">
      <div className={clsx(homePaddingX)}>
        <div className="bg-home-present rounded-xl flex flex-col xl:flex-row items-center justify-between px-[48px] md:px-[62px] py-[62px]">
          <span className="text-[24px] md:text-[32px] text-center xl:text-start text-white w-full xl:w-4/5">
            Our Blockchain Consultant Will Recommend The Best Solution for Your
            Company
          </span>
          <div className="mx-8 my-4 xl:my-0" />
          <div className="xl:w-1/5 flex justify-center">
            <Button
              labelClassName={"text-white"}
              className="bg-red-100 btn-gradient"
              label="Let's Get Started"
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-[71px]">
          <div className="flex flex-col lg:w-1/2">
            <div className="text-[32px] md:text-[48px] text-secondary uppercase text-center">
              Proudly Present our beloved product
            </div>
            <div className="text-center text-btnl md:heading-sl text-white mt-8">
              This is the subtitle describe about the display title what
              blockchainworks can do
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CardLearnMore />
          <CardLearnMore />
        </div>
      </div>
    </div>
  );
};

export default HomePresent;
