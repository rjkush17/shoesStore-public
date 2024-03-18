import React, { useEffect, useState } from "react";
import { uselogin } from "../hook/uselogin";
import { useSignup } from "../hook/useSignup";
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
  const handlelogin =async (e) => {
    e.preventDefault();
   const success =await fetchData(loginData);
     if(success){
      handleLoginopen()
     }
  };

  //sign up function
  const { isSignLoading, signError, SignUp } = useSignup();
  const [isChecked, setIsChecked] = useState(false);
  // const [SignUpValid, setSignUpValid] = useState(false);
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSignUpForm = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSignUp = async(e) => {
    e.preventDefault();
    if(!isChecked){
      alert("Checked the Terms & Conditions")
      return
    }

    const success = await SignUp(signUpData)
    if(success){
      handleLoginopen();
    }
  };





  return (
    <>
      <div className="w-screen h-screen bg-white-400 flex justify-center items-center top-0 z-50 fixed overflow-hidden bg-[rgba(0,0,0,0.3)]">
        <section className="bg-white h-screen mobile:h-auto p-4 max-w-full tablet:min-w-56 rounded-md">
          <p
            className="text-white w-fit mt-16 mobile:mt-auto ml-auto"
            onClick={handleLoginopen}
          >
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
              <div className="flex justify-between text-gray-400 text-sm mobile:font-normal cursor-pointer">
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
            <form onSubmit={handleSignUp} className="px-8">
              <input
                type="text"
                id="username"
                className="input px-4 mb-6"
                name="username"
                value={signUpData.username}
                placeholder="Create a username *"
                onChange={(e) => handleSignUpForm(e)}
                required
              />
              <input
                type="email"
                id="email"
                className="input px-4 mb-6"
                name="email"
                value={signUpData.email}
                placeholder="Enter Your Mail *"
                onChange={(e) => handleSignUpForm(e)}
                required
              />
              <input
                type="password"
                id="password"
                className="input px-4 mb-6"
                name="password"
                value={signUpData.password}
                placeholder="Create Password *"
                onChange={(e) => handleSignUpForm(e)}
                required
              />

              <div className="text-gray-400 text-sm mobile:font-normal cursor-pointer">
                <input
                  type="checkbox"
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                  id="radio"
                />
                <label htmlFor="radio" className="m-1">
                  I agree with the terms and conditions.
                </label>
              </div>
              <div className="h-14 my-6">
                {signError && <p className="error">{signError}</p>}
              </div>
              <hr />
              <div className="flex justify-center gap-2 items-center mt-3 mb-8">
                {isSignLoading ? (
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
