import "./index.scss";
import "./fetchPlants";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Plants from "./pages/Plants/Plants";
import Care from "./pages/Care/Care";
import Layout from "./pages/Layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "plants", element: <Plants /> },
      { path: "care", element: <Care /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
