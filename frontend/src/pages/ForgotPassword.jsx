import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <div className="main w-full md:px-20 bg-gradient-to-b from-zinc-800 to-blue-950 h-full text-white md:flex">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-40 w-auto"
              src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-200">
              Find Your Account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >
                  Enter Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                  />
                </div>
              </div>

              <div>
                <Link to="/forgotpassword/resetpassword">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send OTP
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
