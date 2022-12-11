import Image from "next/image";
import Link from "next/link";
import React from "react";

const FOOTER_SOCMED = [
  "/circle-instagram.svg",
  "/circle-dribbble.svg",
  "/circle-twitter.svg",
  "/circle-youtube.svg",
];

const Footer = () => {
  return (
    <div className="bg-secondary-dark flex flex-col md:flex-row items-center justify-between py-6 px-[115px]">
      <span className="text-white text-center md:text-start text-ml">
        © 2021 Landify UI Kit. All rights reserved
      </span>

      <div className="list-none flex flex-row items-center gap-4 mt-4 md:mt-0">
        {FOOTER_SOCMED.map((val, key) => (
          <Link href="/" key={key}>
            <Image src={val} height={24} width={24} alt="img" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
