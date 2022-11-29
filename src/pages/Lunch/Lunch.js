import React, { useContext } from 'react';
import { FoodContext } from '../../layouts/Main';
import LunchCards from './LunchCards';

const Lunch = () => {
    const foods = useContext(FoodContext);
    const lunchs = foods.filter(food => food.category === 'lunch')
    return (
        <div className='container mx-auto grid grid-cols-3 gap-y-10 my-6'>
            {
                lunchs.map(lunch => <LunchCards key={lunch.id} lunch={lunch} />)
            }
        </div>
    );
};

export default Lunch;