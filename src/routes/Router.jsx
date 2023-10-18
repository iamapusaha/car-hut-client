
import { createBrowserRouter } from "react-router-dom";
import Root from "../latouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AddBrand from "../pages/AddBrand/AddBrand";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: '/addbrand',
                element: <AddBrand></AddBrand>
            }
        ]
    }
])

export default router;