import MovieSwiper from "@/components/movieSwiper/MovieSwiper";
import useTMDbStore from "@/store/store";
import { useEffect, useRef } from "react";

export const BestSeries = () => {
  const { fetchPopularMovies, popularMovies, loading, error } = useTMDbStore();
  const swiperRef = useRef<any>(null);

  // Fetch popular movies when the component is mounted
  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="BestSeries py-[100px]">
      <MovieSwiper
        sectionName="Popular Movies"
        nickname="ONLINE STREAMING"
        movies={popularMovies}
        swiperRef={swiperRef}
      />
    </div>
  );
};
