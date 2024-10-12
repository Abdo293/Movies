import useTMDbStore from "@/store/store";
import { useEffect, useRef } from "react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css";
import MovieSwiper from "@/components/movieSwiper/MovieSwiper";

export const TopRated = () => {
  const { topRatedMovies, loading, error, fetchTopRatedMovies } =
    useTMDbStore();

  const swiperRef = useRef<any>(null);

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
