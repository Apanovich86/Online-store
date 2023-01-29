import React from 'react';
import {createBrowserRouter, Route, Routes} from "react-router-dom";
import {authRoutes} from "../routes";
import Layout from "./Layout";
import Register from "../pages/Register";


// const AppRouter = () => {
//     const isAuth = false;
//     return (
//
//         <Routes>
//             <Route path="/" element={<Layout/>}/>
//             <Route path="register" element={<Register/>}/>
//         </Routes>
//     );
// };
//
// export default AppRouter;

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    },
    {
        path: "/register",
        element: <Register />,
    }
])
