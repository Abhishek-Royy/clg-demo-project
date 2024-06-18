import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../auth/auth";

function LoginPage() {
  const [allUser, setallUser] = useState({
    email: "",
    password: "",
  });

  const success = () =>
    toast.success("🦄 Login Successfull", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const error = () =>
    toast.error("Invalid Credentials!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handelAllInput = (e) => {
    // console.log(e.target.value);

    let nameProperty = e.target.name;
    let valueProperty = e.target.value;

    setallUser({
      ...allUser,
      [nameProperty]: valueProperty,
    });
  };

  const navigate = useNavigate();

  // USE CONTEXT API
  const { storetokenInLs } = useAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(allUser);

    try {
      const response = await fetch(`http://localhost:5000/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allUser),
      });
      console.log(response);

      if (response.statusText == "OK") {
        const responseData = await response.json();

        // localStorage.setItem("token", responseData.token);
        storetokenInLs(responseData.token);

        setallUser({
          email: "",
          password: "",
        });
        success();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        error();
      }
    } catch (error) {
      console.log("error in login", error);
    }
  };

  return (
    <>
      <div className="main w-full md:px-20 bg-gradient-to-b from-blue-950 to-zinc-800 h-full text-white md:flex">
        <div className="left md:w-2/4">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-40 w-auto"
                src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
                Login to your Account
              </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handelSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-2 text-white-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={allUser.email}
                      onChange={handelAllInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <Link
                        to="/forgotpassword"
                        className="font-semibold text-amber-300 hover:text-amber-500"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={allUser.password}
                      onChange={handelAllInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-7"
                  >
                    Log In
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <NavLink
                  to="/register"
                  className="font-semibold leading-6 text-amber-300 hover:text-amber-500"
                >
                  Create a new Account
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className="right w-2/4 md:flex items-center justify-center hidden">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4506461-3738664.png"
            alt="Programmer Illustration"
            width="550px"
          />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
