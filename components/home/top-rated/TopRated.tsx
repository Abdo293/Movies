import useTMDbStore from "@/store/store";
import { useEffect, useRef } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css";
import MovieSwiper from "@/components/movieSwiper/MovieSwiper";
import { Swiper as SwiperInstance } from "swiper";

export const TopRated = () => {
  const { topRatedMovies, loading, error, fetchTopRatedMovies } =
    useTMDbStore();

  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    if (topRatedMovies.length === 0) {
      fetchTopRatedMovies();
    }
  }, [topRatedMovies, fetchTopRatedMovies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="top-rated py-[100px]">
      <MovieSwiper
        sectionName="Top Rated Movies"
        nickname="ONLINE STREAMING"
        movies={topRatedMovies}
        swiperRef={swiperRef}
      />
    </div>
  );
};
