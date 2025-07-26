import Footer from "../footer";
import { useEffect, useState } from "react";
import Meta from "./meta";
import NavBar from "../navbar";
import MobileNav from "../navmobile";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setShowModal] = useState(false);

  const handleHamburgerClick = () => {
    setShowModal(!isModalOpen);
  };

  return (
    <>
      <Meta {...meta} />
      <div className="flex flex-col min-h-screen ">
        <NavBar setIsOpen={setIsOpen} isOpen={isOpen} />
        <main className="flex-grow bg-[#faf9fb]">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default MainLayout;
