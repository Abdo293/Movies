"use client";
import useTMDbStore from "@/store/store";
import { useEffect, useRef } from "react";
import "swiper/css";
import MovieSwiper from "@/components/movieSwiper/MovieSwiper";
import { Swiper as SwiperInstance } from "swiper";

const Upcoming = () => {
  const { upcomingMovies, loading, error, fetchMovies } = useTMDbStore();
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    if (upcomingMovies.length === 0) {
      fetchMovies();
    }
  }, [upcomingMovies, fetchMovies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="upcoming">
      <div className="overlay-img"></div>
      <MovieSwiper
        sectionName="Upcoming Movies"
        nickname="ONLINE STREAMING"
        movies={upcomingMovies}
        swiperRef={swiperRef}
      />
    </div>
  );
};

export default Upcoming;
