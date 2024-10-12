import { Button } from "@/components/ui/button";
import Image from "next/image";
import { VscDebugStart } from "react-icons/vsc";
import { motion } from "framer-motion";

export const SecondService = () => {
  return (
    <div className="SecondService py-[100px] max-md:px-[15px]">
      <div className="container mx-auto max-md:px-[15px] flex flex-col lg:flex-row items-center lg:justify-between gap-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 text-[#656363] text-xs font-medium mb-4">
            <div className="w-[40px] h-[3px] bg-mainColor"></div>
            OUR SERVICES
          </div>
          <p className="text-[#1e1b29] text-[36px] font-bold mb-4">
            Live Movie & TV Shows For Friends & Family
          </p>
          <p className="text-[#6a6a6a] font-medium w-[70%] max-md:w-full mb-6">
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod.
            There are many variations of passages of lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="flex items-center gap-10 mb-6">
            <h2 className="quality">HD 4K</h2>
            <div className="text-[#1e1b29] leading-[1.1]">
              <p className="font-bold text-[38px]">20K+</p>
              <p className="font-bold">Active Customer</p>
            </div>
          </div>
          <div>
            <Button className="max-md:hidden text-black border-2 border-mainColor p-5 font-bold rounded-[50px] transition-colors duration-500 hover:bg-white hover:text-black bg-mainColor mt-10 flex items-center gap-3 justify-center">
              <VscDebugStart className="text-[16px]" />
              <span>Watch Now</span>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={"/live_img.png"}
            width={675}
            height={450}
            alt="live img"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};
