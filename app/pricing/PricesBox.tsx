import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

interface PricingStrategyProps {
  premiumOrStandard: string;
  price: number;
  quality: string;
  resolution: string;
  numberOfScreen: number;
}
export const PricesBox = ({
  premiumOrStandard,
  price,
  quality,
  resolution,
  numberOfScreen,
}: PricingStrategyProps) => {
  return (
    <div className="bg-[#1F1E24] items-center py-[40px] px-[20px] transition-colors duration-500 border-2 border-transparent hover:border-mainColor hover:rounded">
      <div className="flex flex-col justify-center items-center mb-8">
        <p className="uppercase text-xs text-white font-bold">
          {premiumOrStandard}
        </p>
        <div className="bg-mainColor rounded max-w-[138px] py-[30px] px-[25px] mt-5">
          <p className="text-[#14141d] text-[28px] font-bold leading-[1] text-center">
            ${price}
          </p>
          <p className="text-[#14141d] font-bold text-center text-sm">
            Monthly
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center border-b border-[#414146] pb-[15px] mb-[25px]">
        <div className="text-white text-xs flex items-center gap-3">
          <FaCheck />
          <p className="font-medium">Video quality</p>
        </div>
        <p className="text-mainColor text-xs font-medium">{quality}</p>
      </div>

      <div className="flex justify-between items-center border-b border-[#414146] pb-[15px] mb-[25px]">
        <div className="text-white text-xs flex items-center gap-3">
          <FaCheck />
          <p className="font-medium">Resolution</p>
        </div>
        <p className="text-white text-xs font-medium">{resolution}</p>
      </div>

      <div className="flex justify-between items-center border-b border-[#414146] pb-[15px] mb-[25px]">
        <div className="text-white text-xs flex items-center gap-3">
          <FaCheck />
          <p className="font-medium">Screens you can watch</p>
        </div>
        <p className="text-white text-xs font-medium">{numberOfScreen}</p>
      </div>

      <div className="border-b border-[#414146] pb-[15px] mb-[25px]">
        <div className="text-white text-xs flex items-center gap-3">
          <FaCheck />
          <p className="font-medium">Cancel anytime</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Button className="mx-auto text-white border-2 border-mainColor font-bold h-[45px] w-[130px] rounded-full transition-colors duration-500 hover:bg-mainColor hover:text-black bg-[#171D22]">
          Buy Now
        </Button>
      </div>
    </div>
  );
};
