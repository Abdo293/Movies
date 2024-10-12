import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineAccessTime } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

interface MovieCardProps {
  id: number;
  title: string;
  img: string;
  review: string;
  voteAverage: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  img,
  review,
  voteAverage,
}) => {
  return (
    <motion.div
      className="flex flex-col max-md:px-5 text-white"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/movie-details/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${img}`}
          width={300}
          height={375}
          alt={title}
          className="w-full h-auto object-cover rounded shadow-md"
          loading="lazy"
        />
      </Link>

      <div className="flex justify-between items-center gap-5 mt-5">
        <Link
          href={`/movie-details/${id}`}
          className="text-lg font-semibold truncate"
        >
          {title}
        </Link>
        <p className="text-mainColor text-sm font-medium">{review}</p>
      </div>

      <div className="flex justify-between items-center pt-3">
        <p className="border-2 border-white text-[11px] text-mainColor font-bold py-[3px] px-[10px]">
          HD
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <MdOutlineAccessTime className="text-mainColor" />
            <span className="text-[#bcbcbc]">128 min</span>
          </div>

          <div className="flex items-center gap-1">
            <BiSolidLike className="text-mainColor" />
            <span className="text-[#bcbcbc]">{voteAverage.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
