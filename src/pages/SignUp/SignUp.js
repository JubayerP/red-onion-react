import React from "react";
import logo from '../../images/logo2.png';

const SignUp = () => {
  return (
    <div>
      <form className="flex flex-col space-y-6 items-center mb-8">
        <img src={logo} alt="" className="w-[200px] mb-5" />
        <input
          type="text"
          name="name"
          className=" py-3 px-3 w-1/4 block outline-0 rounded bg-[#f5f5f5]"
          placeholder="name"
        />
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
        <input
          type="password"
          name="confirm"
          className="block py-3 px-3 w-1/4 outline-0 rounded bg-[#f5f5f5]"
          id=""
          placeholder="confirm password"
        />
        <button
          type="submit"
          className="py-3 px-2 w-1/4 text-white bg-[#f91944] rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
