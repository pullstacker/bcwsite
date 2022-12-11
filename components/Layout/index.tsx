import clsx from "clsx";
import Head from "next/head";
import { FC, ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  className,
  title = "Blockchain Works",
}) => {
  return (
    <div className="flex">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="bg-dark-grey w-full min-h-screen bg-primary">
        <div className={clsx(className, "relative w-full")}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
