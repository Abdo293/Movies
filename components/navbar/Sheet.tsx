import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { Links } from "./Links";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const PhoneNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FaBars className="text-[30px]" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image
              width={151}
              height={44}
              src="/logo.png"
              alt="logo"
              priority
            />
          </SheetTitle>
          <SheetDescription>
            <ul className="mt-5 mb-3">
              <Links />
            </ul>

            <div className="flex justify-center gap-5 font-[400px] transition duration-500 mt-5">
              <FaTwitter className="text-[18px] font-[400px] transition duration-500 hover:text-mainColor cursor-pointer" />
              <FaFacebookSquare className="text-[18px] font-[400px] transition duration-500 hover:text-mainColor cursor-pointer" />
              <FaPinterestP className="text-[18px] font-[400px] transition duration-500 hover:text-mainColor cursor-pointer" />
              <FaInstagram className="text-[18px] font-[400px] transition duration-500 hover:text-mainColor cursor-pointer" />
              <FaYoutube className="text-[18px] font-[400px] transition duration-500 hover:text-mainColor cursor-pointer" />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
