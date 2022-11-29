import React, { useContext } from "react";
import { FoodContext } from "../../layouts/Main";
import DinnerCards from "./DinnerCards";

const Dinner = () => {
  const foods = useContext(FoodContext);
  const dinners = foods.filter((food) => food.category === "dinner");
  console.log(dinners);
  return (
    <div className="container mx-auto grid grid-cols-3 gap-y-10 my-6">
      {dinners.map((dinner) => (
        <DinnerCards key={dinner.id} dinner={dinner} />
      ))}
    </div>
  );
};

export default Dinner;
