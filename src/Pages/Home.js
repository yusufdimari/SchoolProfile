import React from "react";
import SchoolCard from "../components/SchoolCard";
import "../css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useAuth } from "../components/Auth/use-auth";
export default function Home() {
  const auth = useAuth();
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    // initialSlide: 0,
    // className: "center",
    // centerMode: true,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          lazyLoad: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 0,
          // className: "center",
          // centerMode: true,
          // fade: true,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-title"> Top Schools</div>
        <div className="slider">
          <Slider {...settings} className="home-slider">
            <SchoolCard
              acronym={"SAGA"}
              slogan={`"Read in the name of your Lord"`}
              address={"Asokoro, Abuja"}
              name="Sheikh Gummi Academy"
              ratings={"1.2k"}
              img={require("../img/ii.jpg")}
              logo={require("../img/saga.png")}
            />
            <SchoolCard
              acronym={"NTIC"}
              address={"Wuse II, Abuja"}
              name="Nigerian Tulib College"
              ratings={"5k"}
              img={require("../img/1.jpg")}
              logo={require("../img/saga.png")}
            />
            <SchoolCard
              acronym={"IQ Academy"}
              address={"Garki, Abuja"}
              name="Inteliigent Quotient Academy"
              ratings={"1.1k"}
              img={require("../img/2.jpg")}
              logo={require("../img/saga.png")}
            />
            <SchoolCard
              acronym={"Glisten"}
              address={"Wuye, Abuja"}
              name="Glisten Academy"
              ratings={"1.2k"}
              img={require("../img/3.jpg")}
              logo={require("../img/saga.png")}
            />
            <SchoolCard
              acronym={"FUAD"}
              address={" Mabushi District Abuja"}
              name="Fuad Labadibi Islamic School"
              ratings={"1.2k"}
              img={require("../img/5.jpg")}
              logo={require("../img/saga.png")}
            />
            <SchoolCard
              acronym={"Regent"}
              slogan={"RESPECT | RESPONSIBILITY | RESOURCEFULNESS"}
              address={"Plot 858, Mabushi District Abuja"}
              name="The Regent Secondary School "
              ratings={"1.2k"}
              img={require("../img/5.jpg")}
              logo={require("../img/regent-logo.png")}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}
