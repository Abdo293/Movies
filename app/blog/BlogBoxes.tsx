import Image from "next/image";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

interface IBlogBoxes {
  img: string;
  date: string;
  title: string;
}

export const BlogBoxes = ({ img, date, title }: IBlogBoxes) => {
  return (
    <div className="bg-[#1F1E24] blog-box-shadow">
      <Image
        width={856}
        height={480}
        src={img}
        alt="blog img"
        className="rounded w-full"
      />

      <div className="p-7">
        <div className="blog-txt relative">
          <p className="flex items-center gap-2 text-[#bcbcbc] font-medium text-sm">
            <IoMdTime className="text-mainColor" /> {date}
          </p>

          <h2 className="text-[26px] font-bold text-white">{title}</h2>

          <p className="text-[#bcbcbc] font-medium py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exesa commodo consequat. Duis aute irure dolor in reprehend
            .
          </p>
        </div>

        <div className="pt-[60px] flex justify-between max-md:flex-col">
          <div className="flex gap-5 max-md:gap-2">
            <p className="flex items-center gap-2 text-[#bcbcbc] font-medium text-xs pr-5 max-md:pr-2 border-r">
              <FaRegUser className="text-mainColor" /> {date}
            </p>

            <p className="flex items-center gap-2 text-[#bcbcbc] font-medium text-xs pr-5 max-md:pr-2 border-r">
              <AiOutlineLike className="text-mainColor" /> 63 Like
            </p>

            <p className="flex items-center gap-2 text-[#bcbcbc] font-medium text-xs pr-5 max-md:pr-2">
              <FaRegComments className="text-mainColor" /> 12 Comments
            </p>
          </div>

          <div className="max-md:pt-3">
            <p className="flex items-center gap-2 text-mainColor font-semibold text-sm cursor-pointer">
              Read More <FaAnglesRight className="text-mainColor" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
