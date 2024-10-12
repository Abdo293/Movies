import { create } from "zustand";
import axios from "axios";

// Define the structure for a movie
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

// Define the structure of the Zustand store
interface TMDbState {
  upcomingMovies: Movie[];
  topRatedMovies: Movie[];
  popularMovies: Movie[]; // Added popular movies field
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
  fetchTopRatedMovies: () => Promise<void>;
  fetchPopularMovies: () => Promise<void>; // Added fetch function for popular movies
}

// Create the Zustand store with typed state
const useTMDbStore = create<TMDbState>((set) => ({
  upcomingMovies: [],
  topRatedMovies: [],
  popularMovies: [], // Initialize popular movies
  loading: false,
  error: null,

  // Fetch upcoming movies
  fetchMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, // Use API Read Access Token here
          },
        }
      );
      set({ upcomingMovies: response.data.results, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  // Fetch top-rated movies
  fetchTopRatedMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, // Use API Read Access Token here
          },
        }
      );
      set({ topRatedMovies: response.data.results, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  // Fetch popular movies
  fetchPopularMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`, // Correct endpoint for popular movies
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, // Use API Read Access Token here
          },
        }
      );
      set({ popularMovies: response.data.results, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useTMDbStore;
