"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "./allMovies";
import { MovieCard } from "@/components/movie-card/MovieCard";
import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";
import { Footer } from "@/components/footer/Footer";
import { motion } from "framer-motion";

interface MovieDetail {
  id: number;
  title: string;
  poster_path: string;
  review: string;
  vote_average: number;
  release_date: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const router = useRouter(); // لإنشاء route جديد
  const searchParams = useSearchParams(); // للوصول إلى الـ URL parameters

  // عند تحميل الصفحة، احصل على رقم الصفحة من الـ URL أو قم بتعيين الصفحة الأولى كافتراضي
  useEffect(() => {
    const page = searchParams.get("page") || "1"; // احصل على رقم الصفحة من الـ URL أو رقم 1 كافتراضي
    setCurrentPage(Number(page)); // قم بتعيين الصفحة الحالية
  }, [searchParams]);

  // جلب الأفلام استنادًا إلى رقم الصفحة
  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(currentPage);
      setMovies(data.results);
      setTotalPages(Math.min(data.total_pages, 500)); // حد أقصى للصفحات إلى 500
    };
    getMovies();
  }, [currentPage]);

  // تحديث الـ URL عند تغيير الصفحة
  const handlePageClick = (data: { selected: number }) => {
    const newPage = data.selected + 1;
    setCurrentPage(newPage);
    router.push(`?page=${newPage}`); // تحديث الـ URL بالصفحة الجديدة
  };

  return (
    <div className="movies">
      <div className="flex items-center justify-center h-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[60px] font-bold text-white"
        >
          Our <span className="text-mainColor">Movie</span>
        </motion.h2>
      </div>
      <div className="all-movies py-[100px]">
        <div className="container mx-auto pb-8 text-center">
          <p className="text-xs font-medium text-mainColor">ONLINE STREAMING</p>
          <h2 className="text-[36px] font-bold text-white">
            New Release Movies
          </h2>
        </div>
        <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-1 gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              img={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              review={movie.release_date.split("-")[0]}
              voteAverage={movie.vote_average}
            />
          ))}
        </div>
        <div className="container mx-auto flex justify-center items-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={totalPages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center items-center mt-[70px] text-[#bcbcbc] border border-[#bcbcbc] w-fit"
            pageClassName="pagination-item"
            pageLinkClassName="pagination-link"
            previousClassName="pagination-item"
            previousLinkClassName="pagination-link"
            nextClassName="pagination-item"
            nextLinkClassName="pagination-link"
            breakClassName="pagination-item"
            breakLinkClassName="pagination-link"
            activeClassName="active"
            disabledClassName="disabled"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
