import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const FirstSection = () => {
  return (
    <div className="form py-[40px] px-[15px]">
      <div className="container mx-auto flex gap-3 items-center max-lg:flex-col">
        <div className="w-1/2 flex flex-col items-center max-lg:w-full">
          <h2 className="text-[30px] uppercase text-[#171d22] font-bold text-left max-md:text-[25px]">
            Trial Start First 30 Days.
          </h2>
          <p className="text-sm text-[#171d22] font-medium text-left">
            Enter your email to create or restart your membership.
          </p>
        </div>

        <div className="w-1/2 max-lg:w-full">
          <div className="relative">
            <Input
              className="inp-shadow bg-white border-2 border-[#faf9f7] h-[59px] rounded placeholder:text-gray-500 font-medium"
              placeholder="Enter Your Email"
            />
            <Button className="md:absolute md:right-1 md:top-1/2 md:transform md:-translate-y-1/2 rounded bg-[#171d22] text-mainColor h-[88%] hover:bg-mainColor hover:text-black transition-colors duration-300 w-[174px] font-bold uppercase border-[#171d22] border-2 max-md:mx-auto max-md:flex max-md:mt-4 max-md:h-[50px]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
