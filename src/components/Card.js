import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmbd.org/t/p/w500" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt="image du film"
      />
      <h2>{movie.title}</h2>
    </div>
  );
};

export default Card;
