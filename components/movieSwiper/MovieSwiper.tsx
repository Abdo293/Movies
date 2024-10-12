import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { MovieCard } from "@/components/movie-card/MovieCard";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css";
import { ArrowSwiper } from "../home/upcoming/ArrowSwiper";
import { Swiper as SwiperInstance } from "swiper"; // استيراد نوع SwiperInstance

// تعريف نوع Movie
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieSwiperSectionProps {
  sectionName: string;
  nickname: string;
  movies: Movie[]; // تحديد نوع movies بدلاً من any
  swiperRef: React.MutableRefObject<SwiperInstance | null>; // تحديد النوع SwiperInstance | null
}

const MovieSwiper: React.FC<MovieSwiperSectionProps> = ({
  sectionName,
  nickname,
  movies,
  swiperRef,
}) => {
  return (
    <div>
      <div className="z-10 container mx-auto flex justify-between items-center max-md:flex-col">
        <div>
          <p className="text-xs font-medium text-mainColor">{nickname}</p>
          <h2 className="text-[36px] font-bold text-white">{sectionName}</h2>
        </div>

        <div className="flex items-center gap-2 max-md:pt-5">
          <ArrowSwiper swiperRef={swiperRef} />
        </div>
      </div>

      <div className="container mx-auto pt-5">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, A11y]}
          navigation={false}
          className="mySwiper arrivals"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                img={movie.poster_path}
                review={movie.release_date.split("-")[0]}
                voteAverage={movie.vote_average}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieSwiper;
