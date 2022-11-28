import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import BreakFast from "../pages/BreakFast/BreakFast";
import Dinner from "../pages/Dinner/Dinner";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import Lunch from "../pages/Lunch/Lunch";
import SignUp from '../pages/SignUp/SignUp'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/breakfast',
                        element: <BreakFast />
                    },
                    {
                        path: '/lunch',
                        element: <Lunch />
                    },
                    {
                        path: '/dinner',
                        element: <Dinner />
                    }
                ]
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])