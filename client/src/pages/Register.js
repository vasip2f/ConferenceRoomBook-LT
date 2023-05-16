import axios from "axios";
import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // add state for password visibility

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Perform client-side validation
    if (userName.trim() === '') {
      toast.error("Please enter your username");
      return;
    }

    if (email.trim() === '') {
      toast.error("Please enter your email");
      return;
    }

    if (password.trim() === '') {
      toast.error("Please enter your password");
      return;
    }

  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const data = {
      username: userName,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:9002/user/signup", data)
      .then((res) => {
        toast.success("Registration is Success 😊", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log(res);
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error("An error occurred during registration");
        }
        console.log(err);
      });
  }
  // toggle password visibility state
  function togglePasswordVisibility() {
    setPasswordVisible((prev) => !prev);
  }
  return (
    <div >
      <Navbar />
      {/* className="login-page w-screen h-[100vh] flex justify-center items-center" */}
      <div className="w-screen h-[90vh] flex  justify-center  items-top login-page">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col  w-[30%]  space-y-4  "
        >
          <h1 className="text-xl text-center ">🆂🅸🅶🅽🆄🅿</h1>
          <div className="flex flex-col ">
            <label className="text-xl ">𝐔𝐬𝐞𝐫 𝐍𝐚𝐦𝐞</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              required="Please enter Your Name"
              placeholder="Enter Your User Name"
              className=" border border-zinc-400 outline-none  px-6 py-2 text-black "
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-xl ">𝐄𝐦𝐚𝐢𝐥</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required="Please enter Your Email"
              placeholder="Enter Your Email"
              className=" border border-zinc-400 outline-none  px-6 py-2 text-black "
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-xl ">𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? "text" : "password"} // show or hide password based on state
                required="Please enter Your Password"
                placeholder="Enter Your Password"
                className="border border-zinc-400 outline-none px-6 py-2 text-black w-full"
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
              >
                {passwordVisible ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-blue-300 py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

  );
}

export default Register;
