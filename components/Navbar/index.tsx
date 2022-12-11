import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";

const NAVBAR_LIST = [
  {
    title: "About",
  },
  {
    title: "Process & Service",
  },
  {
    title: "Product",
  },
  {
    title: "Contact Us",
  },
];

const Navbar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);

  return (
    <div className="flex flex-row relative justify-between items-center py-[58px] px-[40px] md:px-[100px] lg:px-[174px]">
      <Image src="/logo.svg" height={36} width={138} alt="logo" />
      <div className="hidden lg:flex">
        <ul className="list-none text-white flex items-center gap-16 bg-transparent">
          {NAVBAR_LIST.map((val, key) => (
            <Link href="/" key={key}>
              <li className="bg-transparent">{val?.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          aria-label="hamburger-navbar"
          onClick={() => setShowResponsiveNavbar(!showResponsiveNavbar)}
        >
          <div
            className={clsx(
              showResponsiveNavbar
                ? (styles["bar-container"], styles.change)
                : styles["bar-container"]
            )}
          >
            <div className={clsx(styles.bar1, "bg-white")} />
            <div className={clsx(styles.bar2, "bg-white")} />
            <div className={clsx(styles.bar3, "bg-white")} />
          </div>
        </button>
      </div>
      {showResponsiveNavbar && (
        <div className="px-12 mt-4">
          <ul className="flex flex-col gap-8">
            {NAVBAR_LIST.map((item, index) => (
              <li key={index}>
                <Link href={'/'}>
                  <a className="text-white heading-m">{item?.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-1/2 h-full absolute right-0">
        <Image src="/bg_navbar.svg" fill alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
