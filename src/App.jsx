import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder from "./features/cart/CreateOrder";
import User from "./features/user/User.jsx";
import Cart from "./features/cart/Cart.jsx";
import Order from "./features/orders/Order";
import { AppLayout } from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: menuLoader },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:id", element: <Order /> },
      { path: "/user", element: <User /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
