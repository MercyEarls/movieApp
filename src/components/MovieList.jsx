import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/tmbd";
import Moviecard, { SeriesCard } from "../components/Moviecard";
import Loader from "../assets/loader.gif";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchMovies = (e) => {
    e.preventDefault();
    setLoading(true);

    fetchSearchMovies();
  };

  const fetchSearchMovies = async () => {
    try {
      const { data } = await axios.get("search/movie", {
        params: {
          query: search,
        },
      });
      setSearchResults(data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const { data } = await axios.get("movie/popular");
        setPopularMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTrendingMovies = async () => {
      try {
        const { data } = await axios.get("trending/all/day");
        setTrendingMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSeries = async () => {
      const { data } = await axios.get("tv/airing_today");
      setSeries(data.results);
    };

    fetchSeries();
    fetchTrendingMovies();
    fetchPopularMovies();
  }, []);

  return (
    <section className="p-4">
      <div className="flex justify-center items-center flex-col gap-3 px-5">
        <h1 className="text-3xl font-bold hidden sm:block">Movie App</h1>
        <p className=" text-center text-sm w-[60%] sm:w-full">
          Discover and watch your favorite movies and series.
        </p>
      </div>

      <form onSubmit={handleSearchMovies} className="w-full py-5 px-5">
        <label htmlFor="search" className="sr-only">
          Search Movie
        </label>
        <input
          type="text"
          className=" rounded-full p-3 outline-none border border-black w-full"
          placeholder=" Search Movie"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
      {!loading ? (
        searchResults.length > 0 && (
          <div className="my-5">
            <h3 className="font-bold pb-5 text-3xl text-center md:text-left">
              Search Results
            </h3>
            <hr />
            <div className="grid md:grid-cols-4 grid-cols mt-5">
              {searchResults.map((movie, index) => {
                return <Moviecard key={index} {...movie} />;
              })}
            </div>
          </div>
        )
      ) : (
        <div className="flex justify-center items-center">
          <img src={Loader} alt="loading" />
        </div>
      )}

      <div className="my-5">
        <h3 className="ml-5  font-bold pb-5 text-3xl text-center md:text-left flex items-center gap-3">
          <Link
            to="/popular"
            className=" text-[rgba(0,0,0,0.5)] hover:text-black transition-all duration-300 ease-in-out "
          >
            <FaLink />
          </Link>
          Popular
        </h3>
        <hr />
        <div className="grid md:grid-cols-4 grid-cols mt-5">
          {popularMovies.map((movie, index) => {
            return <Moviecard key={index} {...movie} />;
          })}
        </div>
      </div>

      <h3 className="ml-5  font-bold pb-5 text-3xl text-center md:text-left flex items-center gap-3">
        <Link
          to="/trending"
          className=" text-[rgba(0,0,0,0.5)] hover:text-black transition-all duration-300 ease-in-out "
        >
          <FaLink />
        </Link>
        Trending Movies
      </h3>
      <hr />
      <div className="grid md:grid-cols-4 grid-cols mt-5">
        {trendingMovies.map((movie, index) => {
          return <Moviecard key={index} {...movie} />;
        })}
      </div>

      <h3 className="ml-5  font-bold pb-5 text-3xl text-center md:text-left flex items-center gap-3">
        <Link
          to="/series"
          className=" text-[rgba(0,0,0,0.5)] hover:text-black transition-all duration-300 ease-in-out "
        >
          <FaLink />
        </Link>
        Series
      </h3>
      <hr />
      <div className="grid md:grid-cols-4 grid-cols  mt-5">
        {series.map((movie, index) => {
          return <SeriesCard key={index} {...movie} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
