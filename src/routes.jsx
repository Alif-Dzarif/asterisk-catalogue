import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const routes = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  }
]);

export default routes;