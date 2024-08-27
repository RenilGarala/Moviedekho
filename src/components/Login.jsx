import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState("ture");
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value); 
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  }
  return (
    <div className="shadow-lg bg-gradient-to-t bg-black bg-opacity-25  h-screen from-black via-transparent to-black">
      <Header />

      {/* background image */}
      <div className=" -z-10 fixed ">
        <img src="./loginbg.jpg" alt="" className="shadow-2xl " />
      </div>
      <div className="h-28"></div>

      <div className={!isSignInForm ? "-my-10" : "my-14"}>

        <form onSubmit={(e)=> e.preventDefault()} className="w-10/12  md:w-3/12 absolute p-12 bg-black m-auto md:my-16 right-0 left-0 bg-opacity-80 text-white">
          <h2 className="font-bold text-3xl md:text-4xl py-4">
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-3 my-2 w-full bg-neutral-700 rounded-md"
            ></input>
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-3 my-2 w-full bg-neutral-700 rounded-md"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-neutral-700 rounded-md"
          ></input>
          {!isSignInForm && (
            <input
              type="password"
              placeholder="Conform Password"
              className="p-3 my-2 w-full bg-neutral-700 rounded-md"
            ></input>
          )}
          <p className="text-red-600 pt-2 float-right font-medium">{errorMessage}</p>
          <button className="p-3 mt-8 mb-5 bg-red-700 w-full rounded-md" onClick={handleButtonClick }>
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-500">
            {isSignInForm ? "New to Netflix?" : "Already registered?"}
            <span
              className="text-gray-300 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {" "}
              {isSignInForm ? "Sign In" : "Sign Up"}
            </span>{" "}
            Now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
