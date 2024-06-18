import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div class="bg-gradient-to-l from-zinc-800 to-blue-950 pb-16">
        <div class=" py-24">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
              <h2 class="text-base font-semibold leading-7 text-white">
                Learn faster
              </h2>
              <p class=" mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Everything you learn from this Web app
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-500">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-300">
                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-300">
                      <svg
                        class="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    Try your self
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-300">
                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-300">
                      <svg
                        class="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </div>
                    Course certificates
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-500">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero
                    dolor eget. Sem sodales gravida quam turpis enim lacus amet.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-300">
                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-300">
                      <svg
                        class="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                    Simple Roadmap
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-500">
                    Quisque est vel vulputate cursus. Risus proin diam nunc
                    commodo. Lobortis auctor congue commodo diam neque.
                  </dd>
                </div>
                <div class="relative pl-16">
                  <dt class="text-base font-semibold leading-7 text-gray-300">
                    <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-300">
                      <svg
                        class="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                        />
                      </svg>
                    </div>
                    Development Guide
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-500">
                    Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt
                    mattis aliquet hac quis. Id hac maecenas ac donec pharetra
                    eget.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-300">
                Register every month
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                5,000
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-300">
                Assets under holding
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                $119 trillion
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-300">
                New users annually
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                46,000
              </dd>
            </div>
          </dl>
        </div>
        <div className="mx-auto max-w-7xl md:px-36 md:w-full w-[95%] mt-16 h-full">
          <h1 className="text-4xl font-bold text-center text-amber-300 animate-bounce">
            Other learning Platforms
          </h1>
          <div className="photos flex w-full h-max items-center justify-between mt-8">
            <a
              href="https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=c&keyword=gfg&matchtype=e&campaignid=20039445781&adgroup=147845288105&gad_source=1&gclid=CjwKCAiA8sauBhB3EiwAruTRJrjfeByJLhv9iS9PmGIUJs9_tdPEapjYgCpXsssqFNsCWAeGGYc8ORoCzC0QAvD_BwE"
              target="_blank"
            >
              <img
                className="rounded-3xl hover:animate-pulse cursor-pointer active:scale-95"
                src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64"
                alt="gfg"
                width="100px"
              />
            </a>
            <a href="https://leetcode.com/" target="_blank">
              <img
                className="rounded-3xl hover:animate-pulse cursor-pointer active:scale-95"
                src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png"
                alt="leetcode"
                width="100px"
              />
            </a>
            <a href="https://stackoverflow.com/" target="_blank">
              <img
                className="rounded-3xl hover:animate-pulse cursor-pointer active:scale-95"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94re-Bxd8tEuF1Mi0Xwe0b8l-bjSvSvpp2bojcWynAdenuiodh9FaLotTzmvP9BiE0-o&usqp=CAU"
                alt=""
                width="100px"
              />
            </a>
            <a href="https://www.w3schools.com/" target="_blank">
              <img
                className="rounded-3xl hover:animate-pulse cursor-pointer active:scale-95"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMf29_UEK4_4Pwwjv9xbx_GYJ7ScbZEEe0FdilUEsSgw&s"
                alt=""
                width="100px"
              />
            </a>
          </div>
          <div className="content mt-20">
            <h1 className="text-4xl font-bold  text-amber-400 mb-4">
              History of Our Journey
            </h1>
            <p className="text-lg text-gray-400">
              I started college last year, and I was using OneNote to take notes
              for my CS classes. It was pretty awkward to put code examples into
              the notes. I'd have to either paste code in and just change the
              font to Consolas (which would freeze the program for like 6
              seconds) or paste in a screenshot if I wanted to get some color in
              there.
              <br />
              <br />
              <br />
              So I decided to try to make my own note-taking software to use
              that would make it easy to put code in, and make it look nice.
              <br />
              <br />
              <br />
              At first, I decided to make the program in C# with WinForms,
              because C# is the language that I'm most familiar with and I
              assumed that winforms was cross-platform (I was very wrong).
            </p>
            <div className="button mt-5 md:flex items-center justify-between">
              <Link to="/editor/happy_editor">
                <button className="bg-cyan-500 shadow-sm hover:bg-cyan-600 text-white w-full md:w-auto font-normal py-3 px-20 rounded-lg  ">
                  Try Your Self
                </button>
              </Link>
              <Link to="/contact">
              <button className="bg-cyan-500 shadow-sm hover:bg-cyan-600 text-white w-full md:w-auto mt-4 md:mt-0 font-normal py-3 px-20 rounded-lg  ">
                Talk With Us
              </button>
              </Link>
            </div>
            <p className="text-lg text-gray-400">
              <br />
              This is what came out of it (looks like garbage). The idea was
              that you would type your notes into the textbox on the left, and
              it would render that into an HTML page with the code highlighted
              on the right.
              <br />
              <br />
              <br />
              This version of the program would make a whole folder for each
              notebook, a subfolder for each section, and finally a text file
              for each page. That was an incredibly stupid idea, because you
              couldn't have certain characters that aren't allowed in directory
              names, and you couldn't have two of anything with the same name.
              <br />
              <br />
              <br />
              So then I rewrote the whole thing to make the
              notebooks/sections/pages into C# classes that were serialized to 1
              file, which was a lot better.
              <br />
              <br />
              This actually worked for a few weeks for taking notes in class,
              even though the two-panel design was a really stupid and ugly
              idea.
              <br />
              <br />
              <br />
              A few weeks later I decided that the program was utter trash, and
              decided to rewrite it a second time. That was when I realized that
              winforms was not cross platform at all. So I spent about 3 days
              searching the internet for a cross-platform GUI library type
              thing. I also wanted to make it a 'WYSIWYG' editor because having
              a separate panel for text and another panel for the rendered page
              is really ugly.
              <br />
              <br />I finally settled on Electron, and after a few days of
              working on the project I was already amazed at how much better it
              looks than anything that I could ever make in WinForms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
