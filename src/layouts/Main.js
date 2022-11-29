import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';

export const FoodContext = createContext();

const Main = () => {
    const foods = useLoaderData();
    return (
        <FoodContext.Provider value={foods}>
            <Navbar />
            <Outlet />
        </FoodContext.Provider>
    );
};

export default Main;