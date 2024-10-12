"use client";
import { SectionHeader } from "@/components/sections-header/SectionHeader";
import React from "react";
import { PricesBox } from "./PricesBox";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="pricing py-[100px]">
      <SectionHeader heading="Our Plan" />
      <div className="container mx-auto">
        <div className="pt-[100px] text-center">
          <p className="font-bold text-sm text-[#bcbcbc]">our pricing plans</p>
          <h2 className="text-[36px] text-white font-bold">
            Our Pricing Strategy
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-5"
        >
          <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 w-[80%] max-lg:w-full max-md:w-3/4">
            <PricesBox
              premiumOrStandard="premium"
              price={7.99}
              quality="good"
              resolution="480p"
              numberOfScreen={1}
            />
            <PricesBox
              premiumOrStandard="premium"
              price={9.99}
              quality="good"
              resolution="1080p"
              numberOfScreen={2}
            />
            <PricesBox
              premiumOrStandard="premium"
              price={11.99}
              quality="good"
              resolution="4K+HDR"
              numberOfScreen={4}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
