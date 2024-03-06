import React from "react";
import { Link } from "react-router-dom";
const getPostURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face/${posterpath}`;
};

const createMovieURL = (id) => {
  return `/movie/${id}`;
};

const createSeriesURL = (id) => {
  return `/tv/${id}`;
};

const Moviecard = ({ poster_path, title, release_date, id }) => {
  return (
    <Link to={createMovieURL(id)}>
      <div
        className="flex flex-col gap-2 shadow-md m-3 hover:shadow-xl "
        style={{ borderRadius: "10px", transition: "all 0.4s ease" }}
      >
        <img
          src={getPostURL(poster_path)}
          alt={title}
          className="w-100% h-[250px]"
          style={{
            objectFit: "cover",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        />
        <div className="flex flex-col p-3 ">
          <h1 className="font-bold">{title}</h1>
          <p className="font-normal text-slate-500">{release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export const SeriesCard = ({ poster_path, release_date, name, id }) => {
  return (
    <Link to={createSeriesURL(id)}>
      <div
        className="flex flex-col gap-2 shadow-md m-3 hover:shadow-xl "
        style={{ borderRadius: "10px", transition: "all 0.4s ease" }}
      >
        <img
          src={getPostURL(poster_path)}
          alt={name}
          className="w-100% h-[250px]"
          style={{
            objectFit: "cover",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        />
        <div className="flex flex-col p-3 ">
          <h1 className="font-bold">{name}</h1>
          <p className="font-normal text-slate-500">{release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Moviecard;
