import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { homePaddingX } from "utils";

const ItemHomeDo = () => {
  return (
    <div className="p-8 pb-8 flex flex-col  items-center md:items-start lg:pb-14 bg-black-soft rounded-2xl border-gradient w-full">
      <Image
        src="/ic_handshake.svg"
        width={64}
        height={30}
        alt="handhsake"
        className="mb-8"
      />
      <span className="heading-sm text-white">Blockchain Sharing Session</span>
    </div>
  );
};

const HomeDoing = () => {
  return (
    <div className="py-[120px]">
      <Image
        src="/blockchain-3.svg"
        className="hidden md:block absolute"
        width={140}
        height={160}
        alt="blockchain-3"
      />
      <div className={clsx(homePaddingX, " xl:w-3/5 mb-20")}>
        <div className="text-[32px] md:text-[38px] text-center lg:text-start text-secondary uppercase">
          We Help bussiness to thrive in blockchain space
        </div>
        <div className="heading-sl text-center lg:text-start text-white  mt-8">
          This is the subtitle describe about the display title what
          blockchainworks can do
        </div>
      </div>
      <div className={clsx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full", homePaddingX)}>
        {[1, 2, 3, 4, 5, 6].map((val, key) => (
          <div key={key} className="w-full">
            <ItemHomeDo />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDoing;
