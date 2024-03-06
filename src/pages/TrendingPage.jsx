import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/tmbd";
import Moviecard from "../components/Moviecard";

const TrendingPage = () => {
  
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {

    const fetchTrendingMovies = async () => {
      try {
        const { data } = await axios.get("trending/all/day");
        setTrendingMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <section className="p-4">

      <div className="my-5 p-4">
        <h3 className="ml-5  font-bold pb-5 text-3xl text-center md:text-left flex items-center gap-3">
          
          Trending Movies
        </h3>
        <hr />
        <div className="grid md:grid-cols-4 grid-cols mt-5">
          {trendingMovies.map((movie, index) => {
            return <Moviecard key={index} {...movie} />;
          })}
        </div>
      </div>

    </section>
  );
};

export default TrendingPage;
