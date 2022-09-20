import React from "react";
import "../css/schoolcard.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function SchoolCard({
  name,
  address,
  ratings,
  acronym,
  img,
  logo,
  slogan,
}) {
  return (
    <div className="card-container">
      <div>
        <div className="img-gradient">
          <img src={img} alt="school Background" className="img-background" />
          <img src={logo} alt="logo" className="img-logo" />
          <div className="card-header">{name}</div>
          <div className="carousel-Container">
            <p className="school-slogan">{slogan}</p>
            {address} <br />
            <div className="carousel-rating">
              <BsStarFill color="gold" />
              <BsStarFill color="gold" />
              <BsStarFill color="gold" />
              <BsStarFill color="gold" />
              <BsStarHalf color="gold" />

              <p className="carousel-rating-count">{ratings} ratings</p>
            </div>
          </div>
        </div>
        <div className="carousel-title">{acronym}</div>
      </div>
    </div>
  );
}

{
  /* <div className="carousel-img">
  <div className="carousel-content">
    {name} <br />
    {address} <br />
    <div className="carousel-rating">
      <BsStarFill color="gold" />
      <BsStarFill color="gold" />
      <BsStarFill color="gold" />
      <BsStarFill color="gold" />
      <BsStarHalf color="gold" />

      <p className="carousel-rating-count">{ratings} ratings</p>
    </div>
  </div>
</div> */
}
