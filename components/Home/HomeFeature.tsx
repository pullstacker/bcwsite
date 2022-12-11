import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { homePaddingX } from "utils";

const FEATURE_DATA = [
  "/consensys.svg",
  "/telkom.svg",
  "/bni.svg",
  "/transvision.svg",
  "/indocodex.svg",
];

const HomeFeature = () => {
  return (
    <div className={clsx("bg-black-soft py-[88px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center center gap-12 rounded-2xl", homePaddingX)}>
      {FEATURE_DATA.map((val, key) => (
        <div key={key}>
          <Image src={val} height={44} width={160} className="object-contain" alt="logo" />
        </div>
      ))}
    </div>
  );
};

export default HomeFeature;
