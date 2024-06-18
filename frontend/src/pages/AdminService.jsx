import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const AdminService = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-purple-800 to-zinc-800">
        <div className="pb-10 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h2 className="text-white font-bold text-xl mb-4">
                Our Services
              </h2>
              <h1 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-6xl">
                Confusion is part of programming
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Computer code can only be interpreted in a single way
                (logically), but programming is a very creative profession.
                Coding is one of the few creative outlets that results in
                interactive works. Nothing is more exciting than producing
                creations people can interact and work with, use, and touch.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute hidden md:flex transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-auto w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://s3-alpha.figma.com/hub/file/4401264414/d7b507bd-4444-4b46-a36e-cb97a30cbf94-cover.png"
                            alt="javascript"
                            className="h-auto w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-auto w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://www.shutterstock.com/image-vector/api-application-interface-icon-simple-600nw-2188533787.jpg"
                            alt="api"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
                            alt="mongo db"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"
                            alt="Summer Style 4"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://www.jdrf.org/wp-content/uploads/2020/12/AWS-logo-2.jpg"
                            alt="aws"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                            alt="next js"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png?f=webp"
                            alt="node js"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-white w-36 py-3 border-none rounded-xl bg-indigo-600 shadow-sm hover:bg-indigo-500 flex items-center justify-center gap-1"
                >
                  View all
                  <FaArrowCircleRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminService;
