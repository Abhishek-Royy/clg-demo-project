import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactPage = () => {
  const success = () =>
    toast.success("Message sent Sucessfully ❤️", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const error = () =>
    toast.error("Failed to send message 😒", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zbxi4mv", "template_o2anm7e", form.current, {
        publicKey: "lD9i51q3JXL0PGl7E",
      })
      .then(
        (result) => {
          if (result.status === 200) {
            success();
          } else {
            error(); // Handle other status codes as error
          }
          console.log("SUCCESS!", result);
        },
        (err) => {
          error(); // Handle error from server
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <>
      <div>
        <section className="bg-gradient-to-b from-blue-950 to-zinc-800 h-full text-white body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-4 text-amber-300">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Please contact with us for more queries
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="name"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="from_name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="from_email"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        for="message"
                        className="leading-7 text-sm text-gray-400"
                      >
                        Message
                      </label>
                      <textarea
                        required
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <input
                      type="submit"
                      value="SEND"
                      className="flex mx-auto w-1/2 cursor-pointer  text-white items-center justify-center bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">
                <span className="text-white">Send Email:- </span>{" "}
                abhishek699.roy@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
