import React, { useEffect, useState } from "react";
import { uselogin } from "../hook/uselogin";
import { IoCloseSharp } from "react-icons/io5";

function Login({ handleLoginopen }) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  const [isLoginOpen, setIsLoginOpen] = useState(true);

  //login functions
  const { isLoading, errors, fetchData } = uselogin();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLoginForm = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlelogin = (e) => {
    e.preventDefault();
    fetchData(loginData);
  };

  return (
    <>
      <div className="w-screen h-screen bg-white-400 flex justify-center items-center top-0 z-50 fixed overflow-hidden bg-[rgba(0,0,0,0.3)]">
        <section className="bg-white p-4 max-w-[34%] rounded-md">
          <p className="text-white w-fit ml-auto" onClick={handleLoginopen}>
            <IoCloseSharp className="text-black text-3xl" />
          </p>
          <p className="text-3xl pb-6 text-center">
            {isLoginOpen ? "Login" : "Sign Up"}
          </p>
          {/* login from */}
          {isLoginOpen ? (
            <form onSubmit={handlelogin} className="px-8">
              <input
                type="email"
                id="email"
                className="input px-4 mb-6"
                name="email"
                value={loginData.email}
                placeholder="Enter Your Registered Mail *"
                onChange={(e) => handleLoginForm(e)}
                required
              />
              <input
                type="password"
                id="password"
                className="input px-4 mb-6"
                name="password"
                value={loginData.password}
                placeholder="Password *"
                onChange={(e) => handleLoginForm(e)}
                required
              />
              <div className="flex justify-between text-gray-400 font-normal cursor-pointer">
                <div>
                  <input type="checkbox" id="radio" />
                  <label htmlFor="radio" className="m-1">
                    Remender ME
                  </label>
                </div>
                <p> Forget Password ?</p>
              </div>
              <div className="h-14 my-6">
                {errors && <p className="error">{errors}</p>}
              </div>
              <hr />
              <div className="flex justify-center gap-2 items-center mt-3 mb-8">
                {isLoading ? (
                  <p className="button bg-red-500 text-white border border-gray-300">
                    Loading....
                  </p>
                ) : (
                  <button
                    type="submit"
                    className="button bg-red-500 text-white border border-gray-300"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
          ) : (
            <form onSubmit={handlelogin} className="px-8">
              <input
                type="text"
                id="username"
                className="input px-4 mb-6"
                name="username"
                value={loginData.email}
                placeholder="Create a username *"
                onChange={(e) => handleLoginForm(e)}
                required
              />
              <input
                type="email"
                id="email"
                className="input px-4 mb-6"
                name="email"
                value={loginData.email}
                placeholder="Enter Your Registered Mail *"
                onChange={(e) => handleLoginForm(e)}
                required
              />
              <input
                type="password"
                id="password"
                className="input px-4 mb-6"
                name="password"
                value={loginData.password}
                placeholder="Password *"
                onChange={(e) => handleLoginForm(e)}
                required
              />
              
              <div className="flex justify-between text-gray-400 font-normal cursor-pointer">
                <div>
                  <input type="checkbox" id="radio" />
                  <label htmlFor="radio" className="m-1">
                    Remender ME
                  </label>
                </div>
                <p> Forget Password ?</p>
              </div>
              <div className="h-14 my-6">
                {errors && <p className="error">{errors}</p>}
              </div>
              <hr />
              <div className="flex justify-center gap-2 items-center mt-3 mb-8">
                {isLoading ? (
                  <p className="button bg-red-500 text-white border border-gray-300">
                    Loading....
                  </p>
                ) : (
                  <button
                    type="submit"
                    className="button bg-red-500 text-white border border-gray-300"
                  >
                    Sign Up
                  </button>
                )}
              </div>
            </form>
          )}
          {/* screen controller */}

          {isLoginOpen ? (
            <p className="text-gray-400 text-center">
              haven't account ?{" "}
              <span
                className="text-purple-600"
                onClick={() => setIsLoginOpen(!isLoginOpen)}
              >
                {" "}
                Create account
              </span>
            </p>
          ) : (
            <p className="text-gray-400 text-center">
              Already have an account ?{" "}
              <span
                className="text-purple-600"
                onClick={() => setIsLoginOpen(!isLoginOpen)}
              >
                {" "}
                Login Here
              </span>
            </p>
          )}
        </section>
      </div>
    </>
  );
}

export default Login;
