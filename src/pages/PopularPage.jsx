import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/tmbd";
import Moviecard from "../components/Moviecard";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PopularPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const { data } = await axios.get("movie/popular");
        setPopularMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <>
      <section className="p-4">
        <div className="my-5">
          <h3 className="ml-5  font-bold pb-5 text-3xl text-center md:text-left flex items-center gap-3">
            <Link
              to="/popular"
              className=" text-[rgba(0,0,0,0.5)] hover:text-black transition-all duration-300 ease-in-out "
            >
              <FaLink />
            </Link>
            Here are the popular movies
          </h3>
          <hr />
          <div className="grid md:grid-cols-4 grid-cols mt-5">
            {popularMovies.map((movie, index) => {
              return <Moviecard key={index} {...movie} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularPage;
