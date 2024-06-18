import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { Link, NavLink } from "react-router-dom";

import { MdOutlineTravelExplore } from "react-icons/md";
import { PiPackageFill } from "react-icons/pi";
import { AiTwotoneCode } from "react-icons/ai";

import AutoSlider from "../components/AutoSlider";

const HomePage = () => {
  const [ranMessage, setranMessage] = useState(
    "Everyone Should Know how to program a Computer, because it teaches you how to thinks.."
  );

  useEffect(() => {
    const message = [
      "The computer was born to solve problems that did not exist before.",
      "Technology is anything that wasn't around when you were born.",
      "Computing is not about computers anymore. It is about living.",

      "The digital revolution is far more significant than the invention of writing or even of printing.",
      "The great myth of our times is that technology is communication.",

      "The advance of technology is based on making it fit in so that you don't really even notice it.",

      "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant.",

      "We are stuck with technology when what we really want is just stuff that works.",

      "Technology is best when it brings people together.",

      "The art challenges the technology, and the technology inspires the art.",
    ];

    const randomMessage = Math.floor(Math.random() * message.length);
    setranMessage(message[randomMessage]);
  }, []);

  useEffect(() => {
    const typed = new Typed(".movement", {
      strings: [
        "Programming",
        "React JS",
        "CSS",
        "MongoDB",
        "Node JS",
        "JavaScript",
      ],
      typeSpeed: 90,
      backSpeed: 85,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className="main-page w-full md:w-full bg-gradient-to-l from-blue-950 to-zinc-800 h-full md:pt-28 pt-10 pb-10 md:px-24   text-white md:flex">
        <div className="left-home md:w-2/4 w-[95%] md:m-0 m-auto flex items-center justify-center flex-col">
          <div className="w-full font-semibold">
            <span className="movement text-3xl w-full text-lime-300"></span>

            <h1 className="md:text-6xl text-5xl">
              Most Easiest and Populer{" "}
              <span className="text-amber-300 font-bold">Coding Platform</span>{" "}
              for Students & Developers
            </h1>

            <div className=" mt-8 w-44 h-10 flex items-center justify-center gap-2 animate-bounce">
              <h2 className="text-xl text-lime-400">#happyCoding</h2>
              <AiTwotoneCode className="text-3xl" />
            </div>
          </div>

          <div className="md:w-full flex mt-8">
            <NavLink to="/explore">
              <button className="md:w-36 w-40 py-3 border-none rounded-xl mr-8 bg-cyan-500 shadow-sm hover:bg-cyan-600 flex items-center justify-center gap-1">
                Explore
                <MdOutlineTravelExplore />
              </button>
            </NavLink>

            <NavLink to="/package">
              <button className="md:w-36 w-40 py-3 border-none rounded-xl bg-cyan-500 shadow-sm hover:bg-cyan-600 flex items-center justify-center gap-1">
                Package
                <PiPackageFill />
              </button>
            </NavLink>
          </div>
          <div className="md:mt-12 mt-8 font-semibold text-2xl text-center md:text-left animate-pulse">
            {ranMessage}
          </div>
        </div>
        <div className="right md:w-2/4 w-full m-auto md:m-0 mt-4 md:mt-0 border-none border-lime-500 flex items-center justify-center">
          <img
            src="https://amoeboids.com/wp-content/uploads/2019/11/Extreme-Programming-What-Is-It-Exactly-Banner.png"
            alt="Extreme Programming"
            className="w-full"
          />
        </div>
      </main>

      <div className="bg-gradient-to-l from-blue-950 to-zinc-800 py-16 sm:py-30 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold leading-8 text-amber-300">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width="158"
              height="48"
            />
          </div>
        </div>

        <div className="smart-compailer w-full h-auto md:px-32 md:flex items-center mt-20 md:gap-10">
          <div className="box md:w-[90vw]  md:h-[20vw] ">
            <video
              className="w-full h-full md:object-cover"
              src="https://videos.pexels.com/video-files/2516160/2516160-hd_1920_1080_24fps.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="w-[95%] m-auto md:m-0">
            <p className="text-3xl font-semibold text-amber-300">
              Use Our top-notch Quick Compiler 🤷‍♂️
            </p>
            <Link to="/editor/happy_editor">
              <button className="mt-5 py-3 bg-[#0891B2] text-white md:w-1/3 w-full  rounded active:scale-95">
                Click to Use
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="slider w-full px-4 md:px-24 h-auto bg-[#212638] py-5">
        <AutoSlider />
      </div>
    </>
  );
};

export default HomePage;
