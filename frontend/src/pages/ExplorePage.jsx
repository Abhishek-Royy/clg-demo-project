import React from "react";
import Slider from "react-slick";

function ExplorePage() {
  const stats = [
    { id: 1, name: "Visit every 24 hours", value: "2 hundred" },
    { id: 2, name: "Assets under holding", value: "900" },
    { id: 3, name: "New users annually", value: "21,000" },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
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
    <>
      <div className="main-div md:w-full w-full min-h-[100vh] bg-gradient-to-l from-blue-950 to-zinc-800">
        <div className="header relative  w-full h-12  bg-gradient-to-b from-[#DA8F13] to-[#ffdb38]">
          <h2 className="text-[#000] font-semibold w-full text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:text-xl">
            It's Mid June, Hurry up🎉, Register as soon as posible & access our
            free of cost premium notes{" "}
          </h2>
        </div>

        <div className="video w-full md:h-[60vh]">
          <video
            className="w-full h-full md:object-cover"
            src="https://videos.pexels.com/video-files/7594882/7594882-hd_1920_1080_25fps.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="div-2 md:w-full w-[95%] m-auto md:m-0  md:px-24 py-8 text-white">
          <h1 className="text-3xl mb-4 text-[#FFE008] font-semibold">
            Thousands of studend visit our website
          </h1>
          <div className="bg-[#ffffff13] py-24 sm:py-10 rounded-xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex max-w-xs flex-col gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-400">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <h1 className="text-3xl my-5 text-[#FFE008] font-semibold">
            Frequiently Asked Question by Students
          </h1>
          <div className="main-faq sm:w-full w-[95%] m-auto sm:m-0 sm:mb-20 mb-[10%] xl:mb-8 ">
            <section
              className="grid grid-cols-1 p-5 gap-y-3 divide-y bg-[#ffffff89] rounded-[10px]"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <details open className="group py-1 text-lg">
                <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                  <span>What is Happy Coding ?</span>
                  <svg
                    className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-gray-700 text-[15px] leading-5">
                  Carrer Counsiling is a process that helps to understand their
                  straingth, weekness, and personality to make alert and consius
                  about their carrer path
                </p>
              </details>
              <details className="group py-1 text-lg">
                <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                  <span>How can Happy Coding Benifits me ?</span>
                  <svg
                    className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-gray-700 text-[15px] leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  odio corporis sunt, porro voluptatum ad itaque reiciendis eum
                  quisquam magnam perspiciatis nisi amet delectus hic dolorem
                  cum ipsam suscipit veritatis.
                </p>
              </details>
              <details className="group py-1 text-lg">
                <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                  <span>What services Happy Coding offers ?</span>
                  <svg
                    className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-gray-700 text-[15px] leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur officia expedita deserunt reprehenderit quaerat.
                  Aliquam velit sed reprehenderit at atque obcaecati, provident
                  quidem beatae tempore mollitia nobis adipisci enim modi.
                </p>
              </details>

              <details className="group py-1 text-lg">
                <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                  <span>How do i get started ?</span>
                  <svg
                    className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-gray-700 text-[15px] leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur officia expedita deserunt reprehenderit quaerat.
                  Aliquam velit sed reprehenderit at atque obcaecati, provident
                  quidem beatae tempore mollitia nobis adipisci enim modi.
                </p>
              </details>

              <details className="group py-1 text-lg">
                <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                  <span>Is Happy Coding Payable ?</span>
                  <svg
                    className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-gray-700 text-[15px] leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur officia expedita deserunt reprehenderit quaerat.
                  Aliquam velit sed reprehenderit at atque obcaecati, provident
                  quidem beatae tempore mollitia nobis adipisci enim modi.
                </p>
              </details>
            </section>
          </div>
          <h1 className="text-3xl my-5 text-[#FFE008] font-semibold">
            For further information Contact Us
          </h1>
          <div className="map w-full h-auto bg-[#212638]">
            <div className="contact-main sm:w-full m-auto w-[95%] xl:h-max sm:h-[40vh] md:h-max lg:h-[40vh]   sm:flex rounded-[10px] bg-[#00000011] ">
              <div className="cm-l  sm:w-[40%] w-full  sm:h-full h-max px-10 ">
                <div className="email leading-5 sm:py-3 py-2">
                  <div className="sec-1 flex items-center justify-start gap-2">
                    <lord-icon
                      src="https://cdn.lordicon.com/tmqaflqo.json"
                      trigger="hover"
                      colors="primary:#4bb3fd,secondary:#e88c30,tertiary:#e83a30"
                    ></lord-icon>
                    <p className="font-semibold text-lg sm:text-base">Email</p>
                  </div>
                  <p className="sm:text-[15px] text-[19px]">Send Us an Email</p>
                  <p className="sm:text-[14px] text-[18px]">
                    happyCoding@gmail.com
                  </p>
                </div>

                <div className="phone leading-5 sm:py-3 py-2">
                  <div className="sec-1 flex items-center justify-start gap-2">
                    <lord-icon
                      src="https://cdn.lordicon.com/aecbaxnc.json"
                      trigger="hover"
                      colors="primary:#f9c9c0,secondary:#e88c30"
                    ></lord-icon>
                    <p className="font-semibold text-lg sm:text-base">Phone</p>
                  </div>
                  <p className="sm:text-[15px] text-[19px]">
                    Call us for assistance
                  </p>
                  <p className="sm:text-[14px] text-[18px]">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div className="location leading-5 sm:py-3 py-2">
                  <div className="sec-1 flex items-center justify-start gap-2">
                    <lord-icon
                      src="https://cdn.lordicon.com/iikoxwld.json"
                      trigger="hover"
                      colors="primary:#e88c30"
                    ></lord-icon>
                    <p className="font-semibold text-lg sm:text-base">
                      Location
                    </p>
                  </div>
                  <p className="sm:text-[15px] text-[19px]">
                    Come to our Office
                  </p>
                  <p className="sm:text-[14px] text-[18px]">
                    Barrackpore, Near Bara Kanthaliya
                  </p>
                </div>
              </div>
              <div className="cm-r sm:w-[60%]">
                <iframe
                  className="w-full rounded-bl-[10px] sm:rounded-tr-[10px] rounded-br-[10px] sm:rounded-bl-none sm:h-full h-[40vh]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.945861754845!2d88.39033028138212!3d22.767390326117773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b98ea6f44b7%3A0x4711cd546a119eab!2sRegent%20College%20Auto%20Stand!5e0!3m2!1sen!2sin!4v1716025259026!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="cards md:flex-nowrap flex-wrap flex justify-evenly my-14">
            <div class="max-w-sm p-6 md:mt-0 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative hover:bottom-3 cursor-pointer">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Saas Technology
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci fugit obcaecati, alias doloremque soluta voluptatum
                aspernatur a in ducimus maiores. Obcaecati, rem officiis error
                odio harum est sed saepe ab.
              </p>
            </div>

            <div class="max-w-sm p-6 md:mt-0 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative hover:bottom-3 cursor-pointer">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Microsoft Azure
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                hic, aspernatur modi numquam maiores tenetur libero inventore
                fuga eos id voluptatibus perferendis odio, harum praesentium
                illum delectus necessitatibus a consequuntur.
              </p>
            </div>

            <div class="max-w-sm p-6 md:mt-0 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative hover:bottom-3 cursor-pointer">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                AWS Services
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                atque, fuga ut id, sequi tempore consectetur labore distinctio,
                dignissimos adipisci aliquam quibusdam blanditiis quas minima
                molestiae hic est neque. Labore.
              </p>
            </div>
          </div>

          <h1 className="text-3xl my-5 text-[#FFE008] font-semibold">
            Our top notch notes
          </h1>
          <div className="notes-product md:w-full w-[95%] m-auto md:m-0 ">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="note-card md:w-[320px] w-full h-[180px] rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
                    alt="html logo"
                  />
                </div>
                <div className="note-card md:w-[320px] w-full h-[180px] rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp"
                    alt="java logo"
                  />
                </div>
                <div className="note-card md:w-[320px] w-full h-[180px] rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
                    alt="css logo"
                  />
                </div>
                <div className="note-card md:w-[320px] w-full h-[180px] rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/v3ksSgN3Wr5YK6z8RrTxCiqf"
                    alt="mongodb logo"
                  />
                </div>
                <div className="note-card md:w-[320px] w-full h-[180px] rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript-1024x576.jpg"
                    alt="js logo"
                  />
                </div>
                <div className="note-card md:w-[320px] w-full h-[180px] rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_643d0fcbab5dcf56b35bde82_10_Reasons_Why_You_Should_Use_Type_Script_with_React_OG_Image_40e8e1e681.jpg"
                    alt="react logo"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExplorePage;
