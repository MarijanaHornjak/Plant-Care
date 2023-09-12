import "./App.css";
import "./fetchProjects";
import About from "./pages/About/About";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <About /> },
  { path: "/about", element: <h1>about</h1> },
  { path: "/contact", element: <h1>contact</h1> },
  { path: "/plants", element: <h1>plants</h1> },
  { path: "/care", element: <h1>care</h1> },
]);

function App() {
  return (
    <>
      <About />
    </>
  );
}

export default App;
