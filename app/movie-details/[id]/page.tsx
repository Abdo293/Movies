"use client";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { VscDebugStart } from "react-icons/vsc";
import MovieSwiper from "@/components/movieSwiper/MovieSwiper";
import useTMDbStore from "@/store/store";

// Define the structure for a movie detail
interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[]; // Genres array
  runtime: number;
  tagline: string;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, // Use your token here
            },
          }
        );
        setMovie(response.data);

        setLoading(false);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const { fetchPopularMovies, popularMovies } = useTMDbStore();
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return null;

  return (
    <div className="movie-details pt-[130px] pb-[90px]">
      <div className="container mx-auto flex gap-5">
        <div className="md:w-[40%] max-md:w-full">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width={303}
            height={430}
            alt={movie.title}
            className="rounded"
          />
        </div>

        <div>
          <p className="text-[26px] text-mainColor font-bold mb-[10px]">
            {movie.tagline}
          </p>
          <p className="text-[60px] font-bold text-white">{movie.title}</p>

          <div className="flex items-center gap-3 mt-[15px]">
            <p className="border bg-white w-fit py-[7px] px-[9px] text-[11px] font-bold leading-[1]">
              PG 18
            </p>
            <p className="border text-white w-fit py-[7px] px-[9px] text-[11px] font-bold leading-[1]">
              HD
            </p>
            <p className="text-sm font-medium text-white">
              {movie.genres.map((e) => `${e.name}`).join(", ")}
            </p>
            <p className="flex items-center gap-2 text-white text-sm font-medium">
              <FaCalendarAlt className="text-mainColor" /> 2024
            </p>
            <p className="flex items-center gap-2 text-white text-sm font-medium">
              <IoMdTime className="text-mainColor" /> 128 min
            </p>
          </div>

          <p className="mt-[15px] text-[#bcbcbc] text-sm leading-[26px] font-medium w-[50%]">
            {movie.overview}
          </p>

          <div className="flex items-center justify-between p-[25px] gap-3 bg-[#242c38] border border-[#343434] max-w-[475px] h-[97px] mt-[15px]">
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center flex-col border-r border-gray-500 pr-[22.5px]">
                <FaShareAlt className="text-white" />
                <p className="text-xs text-[#bcbcbc] font-medium">Share</p>
              </div>

              <div>
                <p className="font-bold text-white">Prime Video</p>
                <p className="text-xs text-[#bcbcbc] font-medium">
                  Streaming Channels
                </p>
              </div>
            </div>

            <Button className="max-md:hidden text-white border-2 border-mainColor p-5 font-bold rounded-[50px] transition-colors duration-500 hover:bg-mainColor hover:text-black bg-[#242c38] flex items-center gap-3 justify-center">
              <VscDebugStart className="text-[16px]" />
              <span>Watch Now</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="films py-[100px]">
        <div className="container mx-auto">
          <MovieSwiper
            sectionName="World Best Movies"
            nickname="Best Movies"
            movies={popularMovies}
            swiperRef={swiperRef}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
