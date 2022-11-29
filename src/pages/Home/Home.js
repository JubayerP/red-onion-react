import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ChooseUs from "../ChooseUs/ChooseUs";

const Home = () => {
  return (
    <div>
      <div className='bg-[url("https://i.ibb.co/fVRRmMd/bannerbackground.png")] h-[85vh] bg-cover bg-center'>
        <div className="flex justify-center items-center h-full">
          <div className="">
            <h1 className="text-5xl font-mono text-stone-800 font-semibold mb-5">
              Best Food Waiting for Your Belly.
            </h1>
            <div className="text-center">
              <input
                className="py-2 px-3 w-1/2 rounded-full outline-0"
                type="text"
                placeholder="Search Food Items"
              />
              <button className="py-2 px-5 bg-[#f91944] rounded-full text-white relative -left-10">
                Search
              </button>
            </div>
          </div>
        </div>
          </div>

          {/* Food Navs */}
          <div className="my-10 flex justify-center space-x-8">
              <NavLink to='/breakfast' className={({isActive}) => isActive ? 'text-[#f91944] font-semibold border-b-4 rounded border-[#f91944]' : 'font-semibold'}>Breakfast</NavLink>
              <NavLink to='/lunch' className={({isActive}) => isActive ? 'text-[#f91944] font-semibold border-b-4 rounded border-[#f91944]' : 'font-semibold'}>Lunch</NavLink>
              <NavLink to='/dinner' className={({isActive}) => isActive ? 'text-[#f91944] font-semibold border-b-4 rounded border-[#f91944]' : 'font-semibold'}>Dinner</NavLink>
          </div>
      <Outlet />
      <ChooseUs />
    </div>
  );
};

export default Home;
