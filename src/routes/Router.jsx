
import { createBrowserRouter } from "react-router-dom";
import Root from "../latouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AddBrand from "../pages/AddBrand/AddBrand";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import SingleProductDetails from "../pages/SingleProductDetails/SingleProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import AddSlider from "../pages/AddSlider/AddSlider";





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
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://car-hut-server-sand.vercel.app/cart')
            },
            {
                path: '/addbrand',
                element: <AddBrand></AddBrand>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/product/:brand',
                element: <BrandDetails></BrandDetails>,
                loader: ({ params }) => fetch(`https://car-hut-server-sand.vercel.app/product/${params.brand}`)

            },
            {
                path: '/product/details/:id',
                element: <PrivateRoute><SingleProductDetails></SingleProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-hut-server-sand.vercel.app/products/${params.id}`)
            },
            {
                path: 'product/update/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-hut-server-sand.vercel.app/products/${params.id}`)
            },
            {
                path: '/addslider',
                element: <AddSlider></AddSlider>
            }
        ]
    }
])

export default router;