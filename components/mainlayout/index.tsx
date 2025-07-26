import Footer from "../footer";
import { useState } from "react";
import Meta from "./meta";
import NavBar from "../navbar";
import { ReactNode } from "react";

interface MainLayoutProps {
  meta: {
    title: string;
    description?: string;
    [key: string]: unknown;
  };
  children: ReactNode;
}

const MainLayout = ({ meta, children }: MainLayoutProps) => {
  return (
    <>
      <Meta {...meta} />
      <div className="flex flex-col min-h-screen ">
        <NavBar />
        <main className="flex-grow bg-[#faf9fb]">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default MainLayout;
