import Link from "next/link";
import React from "react";

export const Links = () => {
  return (
    <>
      <li className="max-md:border-b max-md:border-[#ffffff1f] max-md:py-[10px] max-md:px-[25px] max-md:text-[15px] max-md:border-t hover:text-mainColor transition-colors duration-300">
        <Link href="/" className="font-bold max-md:font-medium">
          Home
        </Link>
      </li>
      <li className="max-md:border-b max-md:border-[#ffffff1f] max-md:py-[10px] max-md:px-[25px] max-md:text-[15px] hover:text-mainColor transition-colors duration-300">
        <Link href="/movies" className="font-bold max-md:font-medium">
          Movie
        </Link>
      </li>
      <li className="max-md:border-b max-md:border-[#ffffff1f] max-md:py-[10px] max-md:px-[25px] max-md:text-[15px] hover:text-mainColor transition-colors duration-300">
        <Link href="/pricing" className="font-bold max-md:font-medium">
          Pricing
        </Link>
      </li>
      <li className="max-md:border-b max-md:border-[#ffffff1f] max-md:py-[10px] max-md:px-[25px] max-md:text-[15px] hover:text-mainColor transition-colors duration-300">
        <Link href="/blog" className="font-bold max-md:font-medium">
          Blog
        </Link>
      </li>
      <li className="max-md:border-b max-md:border-[#ffffff1f] max-md:py-[10px] max-md:px-[25px] max-md:text-[15px] hover:text-mainColor transition-colors duration-300">
        <Link href="/contact-us" className="font-bold max-md:font-medium">
          Contacts
        </Link>
      </li>
    </>
  );
};
