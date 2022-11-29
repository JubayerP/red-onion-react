import React, { useContext } from 'react';
import { FoodContext } from '../../layouts/Main';
import BreakFastCards from './BreakFastCards';

const BreakFast = () => {
    const foods = useContext(FoodContext);
    const breakfasts = foods.filter(food => food.category === 'breakfast');

    return (
        <div className='container mx-auto grid grid-cols-3 gap-y-10 my-6'>
            {
               breakfasts.map(breakfast => <BreakFastCards key={breakfast.id} breakfast={breakfast} />)
            }
        </div>
    );
};

export default BreakFast;