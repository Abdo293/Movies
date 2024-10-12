"use client";
import { SectionHeader } from "@/components/sections-header/SectionHeader";
import { BlogBoxes } from "./BlogBoxes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div>
      <SectionHeader heading="News Update" />
      <div className="blog py-[100px]">
        <div className="container mx-auto flex max-lg:flex-col gap-5">
          <motion.div
            className="w-[75%] max-lg:w-full flex flex-col gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <BlogBoxes
              img="/blog_thumb01.jpg"
              date="10 Mar 2021"
              title="Your Free Movie Streaming Purposes"
            />
            <BlogBoxes
              img="/blog_thumb02.jpg"
              date="20 Oct 2024"
              title="Where watch English movies free?"
            />
            <BlogBoxes
              img="/blog_thumb03.jpg"
              date="5 Jun 2022"
              title="House movie to is streaming website?"
            />
          </motion.div>

          <motion.div
            className="w-[25%] max-lg:w-full flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1F1E24] blog-box-shadow rounded">
              <p className="text-xl font-semibold text-white p-5 relative head-line">
                Search Objects
              </p>
              <div className="relative p-5">
                <Input
                  className="inp-shadow bg-[#393939] border-1 border-[#393939] h-[59px] placeholder:text-gray-300 font-medium"
                  placeholder="Enter Your Email"
                />
                <Button className="absolute right-[20px] top-1/2 -translate-y-1/2 bg-mainColor h-[57%] hover:bg-mainColor">
                  <IoSearchSharp className="text-[20px]" />
                </Button>
              </div>
            </div>

            <div className="bg-[#1F1E24] blog-box-shadow rounded">
              <p className="text-xl font-semibold text-white p-5 relative head-line">
                Categories
              </p>
              <div className="pt-5 px-5 font-semibold text-sm">
                <div className="text-[#bcbcbc] flex justify-between items-center border-b border-dashed border-[#59595c] pb-[15px] mb-[25px]">
                  <p className="">Movies</p>
                  <p className="">12</p>
                </div>
                <div className="text-[#bcbcbc] flex justify-between items-center border-b border-dashed border-[#59595c] pb-[15px] mb-[25px]">
                  <p className="">Action Movies</p>
                  <p className="">10</p>
                </div>
                <div className="text-[#bcbcbc] flex justify-between items-center border-b border-dashed border-[#59595c] pb-[15px] mb-[25px]">
                  <p className="">Streaming</p>
                  <p className="">9</p>
                </div>
                <div className="text-[#bcbcbc] flex justify-between items-center border-b border-dashed border-[#59595c] pb-[15px] mb-[25px]">
                  <p className="">Download</p>
                  <p className="">16</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1F1E24] blog-box-shadow rounded">
              <p className="text-xl font-semibold text-white p-5 relative head-line">
                Recent Posts
              </p>
              <div className="p-5 flex gap-5">
                <Image
                  src={"/blog_thumb01.jpg"}
                  width={100}
                  height={100}
                  alt="recent blog"
                  className="rounded"
                />
                <div>
                  <p className="font-bold leading-[24px] mb-2 text-white">
                    Express Management Effective
                  </p>
                  <p className="flex items-center gap-2 text-[#bcbcbc] font-medium text-sm">
                    <IoMdTime className="text-mainColor" /> 10 Mar 2021
                  </p>
                </div>
              </div>
              <div className="p-5 flex gap-5">
                <Image
                  src={"/blog_thumb02.jpg"}
                  width={100}
                  height={100}
                  alt="recent blog"
                  className="rounded"
                />
                <div>
                  <p className="font-bold leading-[24px] mb-2 text-white">
                    Where watch English movies free?
                  </p>
                  <p className="flex items-center gap-2 text-[#bcbcbc] font-medium text-sm">
                    <IoMdTime className="text-mainColor" /> 20 Oct 2024
                  </p>
                </div>
              </div>
              <div className="p-5 flex gap-5">
                <Image
                  src={"/blog_thumb03.jpg"}
                  width={100}
                  height={100}
                  alt="recent blog"
                  className="rounded"
                />
                <div>
                  <p className="font-bold leading-[24px] mb-2 text-white">
                    House movie to is streaming website?
                  </p>
                  <p className="flex items-center gap-2 text-[#bcbcbc] font-medium text-sm">
                    <IoMdTime className="text-mainColor" /> 5 Jun 2022
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1F1E24] blog-box-shadow rounded">
              <p className="text-xl font-semibold text-white p-5 relative head-line">
                Tag Post
              </p>
              <div className="p-5 flex gap-3 flex-wrap">
                <p className="bg-[#393939] text-sm text-[#bcbcbc] py-2 px-[13px] font-semibold transition-colors duration-300 hover:bg-mainColor cursor-pointer hover:text-black skew-x-[-12deg]">
                  Movies
                </p>
                <p className="bg-[#393939] text-sm text-[#bcbcbc] py-2 px-[13px] font-semibold transition-colors duration-300 hover:bg-mainColor cursor-pointer hover:text-black skew-x-[-12deg]">
                  Creative
                </p>
                <p className="bg-[#393939] text-sm text-[#bcbcbc] py-2 px-[13px] font-semibold transition-colors duration-300 hover:bg-mainColor cursor-pointer hover:text-black skew-x-[-12deg]">
                  News
                </p>
                <p className="bg-[#393939] text-sm text-[#bcbcbc] py-2 px-[13px] font-semibold transition-colors duration-300 hover:bg-mainColor cursor-pointer hover:text-black skew-x-[-12deg]">
                  Romantic
                </p>
                <p className="bg-[#393939] text-sm text-[#bcbcbc] py-2 px-[13px] font-semibold transition-colors duration-300 hover:bg-mainColor cursor-pointer hover:text-black skew-x-[-12deg]">
                  Who
                </p>
                <p className="bg-[#393939] text-sm text-[#bcbcbc] py-2 px-[13px] font-semibold transition-colors duration-300 hover:bg-mainColor cursor-pointer hover:text-black skew-x-[-12deg]">
                  English
                </p>
                <p className="bg-[#393939] text-sm text-[#bcbcbc] py-2 px-[13px] font-semibold transition-colors duration-300 hover:bg-mainColor cursor-pointer hover:text-black skew-x-[-12deg]">
                  Blending
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
