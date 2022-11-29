import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";

const Login = () => {
  return (
    <div>
      <form className="flex flex-col space-y-6 items-center mb-8">
        <img src={logo} alt="" className="w-[200px] mb-5" />
        <input
          type="email"
          name="email"
          className=" py-3 px-3 w-1/4 block outline-0 rounded bg-[#f5f5f5]"
          placeholder="something@email.com"
        />
        <input
          type="password"
          name="password"
          className="block py-3 px-3 w-1/4 outline-0 rounded bg-[#f5f5f5]"
          id=""
          placeholder="password"
        />
        <button
          type="submit"
          className="py-3 px-2 w-1/4 text-white bg-[#f91944] rounded"
        >
          Login
        </button>
      </form>

      {/* Or */}
      <div className="flex justify-center items-center space-x-2">
        <div className="w-[140px] h-[1px] bg-slate-600"></div>
        <p>OR</p>
        <div className="w-[140px] h-[1px] bg-slate-600"></div>
      </div>

      <div className="text-center mt-8">
        <button className="py-3 px-2 w-1/4 font-semibold text-[#f91944] border border-[#f91944] rounded">
          Continue With Google
        </button>
          </div>
          <Link to='/signup'><p className="text-[#f91944] text-center mt-2"><small>Need a new account?</small></p></Link>
    </div>
  );
};

export default Login;
