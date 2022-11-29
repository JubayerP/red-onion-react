import React from "react";

const LunchCards = ({ lunch }) => {
  const { img, name, id, desc, price } = lunch;
  return (
    <div className="py-4 w-2/3 mx-auto hover:shadow-md rounded-md">
      <img className="w-2/3 mx-auto" src={img} alt="" />
      <div className="text-center mt-5">
        <h5 className="text-xl font-semibold">
          {name.length > 30 ? name.slice(0, 24) : name}
        </h5>
        <p className="text-gray-500 mt-3">{desc}</p>
        <h4 className="text-2xl font-semibold">${price}</h4>
      </div>
    </div>
  );
};

export default LunchCards;
