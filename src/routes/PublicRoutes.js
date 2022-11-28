import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
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