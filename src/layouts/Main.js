import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

export const FoodContext = createContext();

const Main = () => {
    const foods = useLoaderData();
    return (
        <FoodContext.Provider value={foods}>
            <Navbar />
            <Outlet />
            <Toaster />
        </FoodContext.Provider>
    );
};

export default Main;