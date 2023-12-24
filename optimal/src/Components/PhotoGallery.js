import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";
import WallMouniting from "../Assets/WallMounting.jpg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#81dd0b",
        marginLeft: 10,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#81dd0b", marginRight: 10,}}
      onClick={onClick}
    />
  );
}
export default function PhotoGallery() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container maxWidth="xxl" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" sx={{ pt: 2 }}>
                {" "}
                Projects Gallery
              </Typography>
            </Box>
          </div>
        </Box>
        <div className="slider-container">
          <Slider {...settings} className="custom-slider">
            <div className="slide-content">
             <img src={WallMouniting}/>
            </div>
            <div className="slide-content">
            <img src={WallMouniting}/>
            </div>
            <div className="slide-content">
            <img src={WallMouniting}/>
            </div>
            <div className="slide-content">
            <img src={WallMouniting}/>
            </div>
            <div className="slide-content">
            <img src={WallMouniting}/>
            </div>
            <div className="slide-content">
            <img src={WallMouniting}/>
            </div>
            <div className="slide-content">
            <img src={WallMouniting}/>
            </div>
            <div className="slide-content"> 
            <img src={WallMouniting}/>
            </div>
            <div className="slide-content"> 
            <img src={WallMouniting}/>
            </div>
            <div className="slide-content"> 
            <img src={WallMouniting}/>
            </div>
          </Slider>
        </div>
      </Container>
    </Container>
  );
}
