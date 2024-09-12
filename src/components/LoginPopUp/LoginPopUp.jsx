import { useState } from "react";
import { assets } from "../../assets/assets";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const LoginPopUp = ({ setShowPopUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [currState, setCurrState] = useState("Login");
  console.log(currState);
  return (
    <div className="absolute z-1 w-full h-full bg-[#00000090] grid">
      <form
        id="form"
        className="place-self-center w-[23vw] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-sm"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-semibold">{currState}</h2>
          <img
            className="w-4 cursor-pointer"
            src={assets.cross_icon}
            onClick={() => setShowPopUp(false)}
          />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-none border-2  border-[#c9c9c9]  p-2.5 rounded-md"
              type="text"
              placeholder="Your Name"
              required
            />
          )}

          <input
            className="outline-none border-2 border-[#c9c9c9] p-2.5 rounded-md"
            type="text"
            placeholder="Your Email"
            required
          />
          <div className="flex items-center justify-between">
            <input
              className="w-full outline-none border-2  border-[#c9c9c9]  p-2.5 rounded-md"
              type={showPassword ? "text" : "password"}
              placeholder={`Password`}
              required
            />
            <div className="z-1 absolute ml-[17vw]">
              {showPassword ? (
                <IoMdEye onClick={() => setShowPassword(false)} />
              ) : (
                <IoMdEyeOff onClick={() => setShowPassword(true)} />
              )}
            </div>
          </div>
          <button className="border-none p-2.5 rounded-md text-white bg-[#ff6347] text-base cursor-pointer">
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="flex items-start gap-2 -mt-3">
            <input className="mt-1" type="checkbox" required />
            <p>By continuing ,I agree to the terms of use & privacy policy</p>
          </div>
          {currState === "Sign Up" ? (
            <p>
              Already have an account?
              <span
                className="text-[#ff6347] font-medium cursor-pointer"
                onClick={() => setCurrState("Login")}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create a new account?
              <span
                className="text-[#ff6347] font-medium cursor-pointer"
                onClick={() => {
                  setCurrState("Sign Up");
                }}
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
