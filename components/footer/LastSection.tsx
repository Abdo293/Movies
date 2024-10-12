import Image from "next/image";
import React from "react";

export const LastSection = () => {
  return (
    <div className="last-sec py-[30px]">
      <div className="container mx-auto flex justify-between items-center max-lg:flex-col">
        <div>
          <p className="text-[#c3c3c3] font-medium text-sm">
            Copyright © 2021. All Rights Reserved By{" "}
            <span className="text-mainColor">Movflx</span>
          </p>
        </div>

        <div className="max-lg:pt-3">
          <Image src={"/card_img.png"} width={314} height={29} alt="card img" />
        </div>
      </div>
    </div>
  );
};
