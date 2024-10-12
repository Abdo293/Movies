import Image from "next/image";
import { Links } from "../navbar/Links";
import { IoSearch } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const MidSection = () => {
  return (
    <div className="mid-sec py-[50px] max-md:px-[15px]">
      <div className="relative links-img container mx-auto flex justify-between items-center max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <div>
          <Image width={151} height={44} src="/logo.png" alt="logo" priority />
        </div>
        <div className="flex items-center gap-5 max-lg:flex-col">
          <ul className="flex max-md:justify-center max-md:mt-3 text-[#c3c3c3] gap-[40px] max-md:gap-[10px] flex-wrap footer-links">
            <Links />
          </ul>
          <div className="relative max-lg:w-full">
            <input
              placeholder="Find Favourite Movie"
              className="inp-shadow border-none text-white focus:outline-none bg-[#12151e] py-[10px] px-[20px] rounded-[30px] placeholder:text-xs max-lg:w-full"
            />
            <IoSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-mainColor cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[85px] flex justify-between items-center max-lg:flex-col max-lg:mt-[79px]">
        <ul className="flex gap-8 text-[#c3c3c3] text-sm font-medium">
          <li className="hover:text-mainColor transition-colors duration-300">
            <a href="#">FAQ</a>
          </li>
          <li className="hover:text-mainColor transition-colors duration-300">
            <a href="#">Help Center</a>
          </li>
          <li className="hover:text-mainColor transition-colors duration-300">
            <a href="#">Terms of Use</a>
          </li>
          <li className="hover:text-mainColor transition-colors duration-300">
            <a href="#">Privacy</a>
          </li>
        </ul>

        <div className="flex justify-center gap-5 transition duration-500 items-center max-lg:mt-[20px]">
          <FaTwitter className="text-[18px] bg-[#12151e] w-[40px] h-[40px] p-3 rounded-full shadow-inner text-[#c3c3c3] transition duration-500 hover:text-mainColor cursor-pointer" />
          <FaFacebookSquare className="text-[18px] bg-[#12151e] w-[40px] h-[40px] p-3 rounded-full shadow-inner text-[#c3c3c3] transition duration-500 hover:text-mainColor cursor-pointer" />
          <FaPinterestP className="text-[18px] bg-[#12151e] w-[40px] h-[40px] p-3 rounded-full shadow-inner text-[#c3c3c3] transition duration-500 hover:text-mainColor cursor-pointer" />
          <FaInstagram className="text-[18px] bg-[#12151e] w-[40px] h-[40px] p-3 rounded-full shadow-inner text-[#c3c3c3] transition duration-500 hover:text-mainColor cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
