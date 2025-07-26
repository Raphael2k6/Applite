import { GrClose } from "react-icons/gr";
import Link from "next/link";

interface MobileNavProps {
  closeModal: () => void;
  // handleOpenScheduleModal: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  closeModal,
  // handleOpenScheduleModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex animate-[slide-down-fade_1s_ease-in-out] items-start justify-end bg-black bg-opacity-50 transition-transform duration-1000 ease-in-out sm:hidden"
      onClick={closeModal}
    >
      <div
        className="h-[100%] w-full rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center mb-12">
          <button onClick={closeModal}>
            <GrClose />
          </button>
        </div>{" "}
        <div className="flex flex-col gap-6 items-start w-full h-full">
          <Link
            href="/"
            className="text-[#001928] font-gilmer text-[1rem] font-[400] hover:font-[700] hover:text-[#002211]"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-[#001928] font-gilmer  text-[1rem] font-[400] hover:font-[700] hover:text-[#002211]"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-[#001928] font-gilmer  text-[1rem] font-[400] hover:font-[700] hover:text-[#002211]"
          >
            Services
          </Link>
          <Link
            href="/contact-us"
            className="text-[#001928] font-gilmer  text-[1rem] font-[400] hover:font-[700] hover:text-[#002211]"
          >
            Contact Us
          </Link>
          <button className="bg-[#002211] font-gilmer  text-[1rem] font-[400] rounded-md px-4 py-2 text-white">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
