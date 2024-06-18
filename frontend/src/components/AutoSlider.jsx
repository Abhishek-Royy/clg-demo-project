import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Data from "./data.json";

function AutoSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
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
    <>
      <div className="slider-container ">
        <Slider {...settings}>
          {Data.map((item, index) => (
            <div key={index}>
              <div
                className="card md:w-[18vw] h-[40vh] bg-gradient-to-tr from-blue-900 to-zinc-300 rounded-[10px]"
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 50px",
                }}
              >
                <div className="text w-full h-[27vh]">
                  <p className="w-full h-full md:text-[14px] text-[22px] p-5 md:p-8">
                    {item.text}
                  </p>
                </div>
                <div className="allname w-full md:h-[13vh] h-[15vh] flex items-center justify-between px-2">
                  <div className="avater md:w-[5vw] md:h-[5vw] w-[15vw]  rounded-full">
                    <img
                      className="w-full h-full object-cover object-center rounded-full"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="avater-name w-auto h-auto">
                    <p className="font-semibold text-lg md:text-base">
                      {item.name}
                    </p>
                    <p className="text-[11px]">{item.rank}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default AutoSlider;
