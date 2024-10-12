import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const ArrowSwiper: React.FC<{ swiperRef: React.RefObject<any> }> = ({
  swiperRef,
}) => {
  return (
    <div className="flex items-center bg-[#20212b] border-2 border-[#2d303d] text-xs rounded-[50px] py-[7px] px-[15px] max-md:px-[10px]">
      <button
        className="border-r-[3px] pr-[15px] border-[#2d303d] "
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <MdKeyboardArrowLeft className="text-xl text-white hover:text-mainColor duration-300 transition-colors" />
      </button>
      <span></span>
      <button
        className="pl-[15px] "
        onClick={() => swiperRef.current?.slideNext()}
      >
        <MdOutlineKeyboardArrowRight className="text-xl text-white hover:text-mainColor duration-300 transition-colors" />
      </button>
    </div>
  );
};
