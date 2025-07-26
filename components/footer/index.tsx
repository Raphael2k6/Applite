import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#070807] py-6 pb-12 px-[8%]">
      <div>
        <ul className="flex gap-6">
          <li>
            <FaTwitter className="text-white text-[26.5px]" />
          </li>
          <li>
            <FaFacebook className="text-white text-[26.5px]" />
          </li>
          <li>
            <FaLinkedin className="text-white text-[26.5px]" />
          </li>
          <li>
            <FaYoutube className="text-white text-[26.5px]" />
          </li>
        </ul>
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:items-center mt-12 py-4">
        <p className="text-white font-[400] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em] sm:pb-0 pb-7">
          &#169; {new Date().getFullYear()} Applite, All right reserved
        </p>
        <p className="text-white font-[400] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
          Terms & Conditions | Privacy Policy | Cookies Policy{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
