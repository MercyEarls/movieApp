import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/tmbd";

const Movie = () => {
  const getPostURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face/${posterpath}`;
  };
  const param = useParams();
  const movieID = param.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovieDetail = async () => {
      const response = await axios.get(`movie/${movieID}`);
      setMovie(response.data);
    };
    getMovieDetail();

    setTimeout(() => {
      window.scrollTo(0, 80);
    }, 1000);
  }, [movieID]);
  const setBackgroundImg = (posterpath) => {
    return `url(https://www.themoviedb.org/t/p/w440_and_h660_face/${posterpath})`;
  };
  return (
    <section
      className="movie-body"
      style={{
        backgroundImage: setBackgroundImg(movie.poster_path),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>
      <div
        className="grid md:grid-cols-2 px-2 sm:p-5"
        style={{ position: "relative" }}
      >
        <div className="MovieImg">
          <img
            src={getPostURL(movie?.poster_path)}
            alt={movie?.name ? movie.name : movie.title}
          />
        </div>
        <div className="MovieContent">
          <h4 className="font-bold text-2xl pt-3">
            {movie?.name ? movie.name : movie.title}
          </h4>
          <h6 className="text-muted pt-3">{movie?.tagline}</h6>
          <h4 className="font-bold pt-3">Overview</h4>
          <p className="pt-3">{movie?.overview}</p>
          <div className="">
            <p className="font-bold text-2xl pt-3">Genres: </p>
            <div className="flex flex-wrap gap-2 flex-shrink">
              {movie?.genres
                ? movie?.genres.map((genre, i) => (
                    <span key={i} className="genre">
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
          </div>
          {/* <p><span className='font-bold text-2xl pt-3'>Genres: <span className='flex flex-wrap'> </span> {movie?.genres ? movie?.genres.map(genre => <span className='genre'>{genre.name}</span>) : ""} </span> </p> */}
          <p className="mt-3">Runtime: {movie.runtime}</p>
        </div>
      </div>
    </section>
  );
};

export default Movie;
