import React from "react";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import About from "./pages/About/About";
import Plants from "./pages/Plants/Plants";
import Care from "./components/Care/Care";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "plants", element: <Plants /> },
      { path: "care", element: <Care /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
