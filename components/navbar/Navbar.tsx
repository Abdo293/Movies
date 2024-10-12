"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Links } from "./Links";
import { Button } from "@/components/ui/button";
import { PhoneNavbar } from "./Sheet";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import Link from "next/link";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 150);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // No dependencies needed here

  return (
    <motion.div
      className="text-white h-[90px] max-md:h-[65px] w-full z-10 flex items-center"
      initial={{
        background: "rgba(0, 0, 0, 0)",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }}
      animate={{
        position: isScrolled ? "fixed" : "absolute",
        background: isScrolled ? "#171d22" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto max-md:px-[15px] flex items-center justify-between">
        <Link href={"/"}>
          <Image width={151} height={44} src="/logo.png" alt="logo" priority />
        </Link>

        <ul className="flex items-center justify-center gap-5 max-md:hidden">
          <Links />
        </ul>

        <div className="flex items-center gap-5">
          <FaSearch className="cursor-pointer" />
          <Button className="max-md:hidden border-2 border-mainColor font-bold h-[45px] w-[130px] rounded-full transition-colors duration-500 hover:bg-mainColor hover:text-black bg-[#171D22]">
            Sign In
          </Button>
          <div className="md:hidden">
            <PhoneNavbar />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
