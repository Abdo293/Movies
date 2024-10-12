"use client";
import { SectionHeader } from "@/components/sections-header/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <SectionHeader heading="Contact Us" />
      <div className="contact py-[100px] pb-[160px]">
        <div className="container mx-auto flex gap-5 max-lg:flex-col max-md:px-[15px]">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[70%] max-lg:w-full"
          >
            <h2 className="text-xl font-semibold text-white py-5 relative head-line w-fit">
              Contact Form
            </h2>
            <div className="border border-[#232226] p-[30px] pb-[15px] mt-5">
              <div className="flex gap-4 max-md:flex-col">
                <Input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-[#1F1E24] placeholder:text-gray-500 placeholder:font-semibold rounded input-box-shadow py-[25px] px-[25px] transition duration-300 border border-transparent focus:border-mainColor text-white"
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  className="bg-[#1F1E24] placeholder:text-gray-500 placeholder:font-semibold rounded input-box-shadow py-[25px] px-[25px] transition duration-300 border border-transparent focus:border-mainColor text-white"
                />
              </div>
              <div className="my-[30px]">
                <Input
                  type="text"
                  placeholder="Subject *"
                  className="bg-[#1F1E24] placeholder:text-gray-500 placeholder:font-semibold rounded input-box-shadow py-[25px] px-[25px] transition duration-300 border border-transparent focus:border-mainColor text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Type Your Message..."
                  className="bg-[#1F1E24] placeholder:text-gray-500 placeholder:font-semibold rounded input-box-shadow py-[25px] px-[25px] min-h-[240px] w-full outline-none transition duration-300 border border-transparent focus:border-mainColor text-white"
                ></textarea>
              </div>

              <Button className="max-md:hidden border-2 border-mainColor font-bold h-[45px] rounded-full transition-colors duration-500 hover:bg-mainColor hover:text-black bg-[#171D22] text-white max-w-[200px] px-8 mt-5">
                Send Message
              </Button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[30%] max-lg:w-full"
          >
            <h2 className="text-xl font-semibold text-white py-5 relative head-line w-fit">
              Information
            </h2>
            <div className="mt-5 bg-[#1F1E24] p-[50px] blog-box-shadow">
              <div className="pb-[25px] mb-[30px] border-b border-[#313035]">
                <p className="text-[#bcbcbc] font-medium">
                  <span className="text-[#fafafa] font-semibold">
                    Find solutions
                  </span>{" "}
                  : to common problems, or get help from a support agent
                  industry's standard .
                </p>
              </div>

              <div className="pb-[25px] mb-[30px] border-b border-[#313035]">
                <div className="flex gap-5 items-center">
                  <div className="w-[50px] h-[50px] bg-mainColor rounded-full leading-[46px] flex justify-center items-center">
                    <FaLocationDot className="text-[18px] text-[#1f1e24]" />
                  </div>
                  <span className="text-[#bcbcbc] text-sm font-medium">
                    <span className="text-[#e5e5e5] pr-[5px] font-semibold">
                      Address:{" "}
                    </span>
                    W38 Park Road New York
                  </span>
                </div>
              </div>

              <div className="pb-[25px] mb-[30px] border-b border-[#313035]">
                <div className="flex gap-5 items-center">
                  <div className="w-[50px] h-[50px] bg-mainColor rounded-full leading-[46px] flex justify-center items-center">
                    <BsFillTelephoneFill className="text-[18px] text-[#1f1e24]" />
                  </div>
                  <span className="text-[#bcbcbc] text-sm font-medium">
                    <span className="text-[#e5e5e5] pr-[5px] font-semibold">
                      Phone :{" "}
                    </span>
                    (09) 123 854 365
                  </span>
                </div>
              </div>

              <div className="pb-[25px] mb-[30px] border-b border-[#313035]">
                <div className="flex gap-5 items-center">
                  <div className="w-[50px] h-[50px] bg-mainColor rounded-full leading-[46px] flex justify-center items-center">
                    <MdEmail className="text-[18px] text-[#1f1e24]" />
                  </div>
                  <span className="text-[#bcbcbc] text-sm font-medium">
                    <span className="text-[#e5e5e5] pr-[5px] font-semibold">
                      Email :{" "}
                    </span>
                    support@movflx.com
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div id="map"></div>
    </div>
  );
};

export default Contact;
