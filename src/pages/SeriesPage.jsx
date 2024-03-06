import React from "react";
import { useState, useEffect } from "react";
import axios from "../api/tmbd";
import { SeriesCard } from "../components/Moviecard";

const SeriesPage = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const { data } = await axios.get("tv/airing_today");
      setSeries(data.results);
    };

    fetchSeries();
  }, []);

  return (
    <>
      <section className="p-4">
        <div className="my-5 p-4">
          <h3 className="ml-5  font-bold pb-5 text-3xl text-center md:text-left flex items-center gap-3">
            Here is a list of Series Movies
          </h3>
          <hr />
          <div className="grid md:grid-cols-4 grid-cols  mt-5">
            {series.map((movie, index) => {
              return <SeriesCard key={index} {...movie} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SeriesPage;
