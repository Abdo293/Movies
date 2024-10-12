import axios from "axios";

export async function fetchMovies(page = 1) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          page: page,
        },
      }
    );
    return response.data; // إرجاع البيانات من الاستجابة
  } catch (error) {
    console.error("Error fetching movies:", error); // تسجيل أي خطأ
    throw error; // إعادة طرح الخطأ للتعامل معه في أماكن أخرى
  }
}
