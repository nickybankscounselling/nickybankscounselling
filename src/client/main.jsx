import React from "react";
import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CounsellingRoom from "./pages/CounsellingRoom";
import CovidPolicy from "./pages/CovidPolicy";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/counselling-room",
        element: <CounsellingRoom />,
    },
    {
        path: "/covid-policy",
        element: <CovidPolicy />,
    },
    {
        path: "/faq",
        element: <FAQ />,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
    },
    {
        path: "/services",
        element: <Services />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navigation />
        <RouterProvider router={router} />
        <Footer />
    </React.StrictMode>
);
