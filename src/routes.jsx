import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import CapsPage from "./pages/CapsPage";
import ShirtPage from "./pages/ShirtPage";
import ShoesPage from "./pages/ShoesPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    element: <Navbar />,
    children: [
      {
        path: '/cap',
        element: <CapsPage />
      },
      {
        path: '/jersey',
        element: <ShirtPage />
      },
      {
        path: '/shoes',
        element: <ShoesPage />
      }
    ]
  }
]);

export default routes;