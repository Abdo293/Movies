import Image from "next/image";
import { LuTv } from "react-icons/lu";
import { FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";

export const Sercives = () => {
  return (
    <div className="services max-md:px-[15px]">
      <div className="container mx-auto flex flex-wrap max-lg:flex-col gap-6 justify-between items-center">
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[48%] max-lg:w-full flex justify-center"
        >
          <Image
            src={"/services_img.jpg"}
            width={500}
            height={500}
            alt="services img"
            className="max-w-full h-auto rounded-lg"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[48%] max-lg:w-full"
        >
          <div className="mb-[20px] max-md:mt-5">
            <div className="flex items-center gap-4 text-[#e4e2e2] text-xs font-medium">
              <div className="w-[40px] h-[3px] bg-mainColor"></div>
              OUR SERVICES
            </div>

            <p className="text-[36px] text-white font-bold max-md:text-[32px] w-[100%] max-lg:w-full">
              Download Your Shows Watch Offline.
            </p>
          </div>

          <p className="font-medium leading-[26px] text-[#bcbcbc] mb-[45px] w-[100%] max-lg:w-full">
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            tempor. There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in some
            injected humour.
          </p>

          <div className="flex items-center gap-4 services-icon border-b border-dashed border-[#38373c] pb-5 w-full">
            <div className="border p-3 border-dashed border-mainColor w-[95px] h-[95px] flex items-center justify-center rounded-full icon">
              <LuTv className="text-[38px] text-white" />
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-[10px]">
                Enjoy on Your TV.
              </h2>
              <p className="text-[#bcbcbc] max-lg:text-sm">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 services-icon pt-5 w-full">
            <div className="border p-3 border-dashed border-mainColor w-[95px] h-[95px] flex items-center justify-center rounded-full icon">
              <FaVideo className="text-[38px] text-white" />
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-[10px]">
                Enjoy on Your TV.
              </h2>
              <p className="text-[#bcbcbc] max-lg:text-sm">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
