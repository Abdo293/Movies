"use client";

import { Button } from "@/components/ui/button";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { VscDebugStart } from "react-icons/vsc";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="home flex flex-col justify-center">
      <div className="container mx-auto max-md:px-[15px]">
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-mainColor font-bold text-[24px] pb-2"
        >
          Movflx
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold text-[60px] text-white max-w-2xl max-md:text-[36px] max-md:w-full max-md:leading-[1.2]"
        >
          Unlimited <span className="text-mainColor">Movie</span>, TV Shows, &
          More.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-5 flex-wrap mt-10"
        >
          <div className="flex justify-center gap-3">
            <p className="border bg-white w-fit py-[7px] px-[9px] text-[11px] font-bold leading-[1]">
              PG 18
            </p>
            <p className="border text-white w-fit py-[7px] px-[9px] text-[11px] font-bold leading-[1]">
              HD
            </p>
          </div>
          <p className="text-white">Romance, Drama</p>
          <p className="flex items-center gap-2 text-white">
            <FaCalendarAlt className="text-mainColor" /> 2024
          </p>
          <p className="flex items-center gap-2 text-white">
            <IoMdTime className="text-mainColor" /> 128 min
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="max-md:hidden text-white border-2 border-mainColor p-5 font-bold rounded-[50px] transition-colors duration-500 hover:bg-mainColor hover:text-black bg-[#171D22] mt-10 flex items-center gap-3 justify-center">
            <VscDebugStart className="text-[16px]" />
            <span>Watch Now</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
