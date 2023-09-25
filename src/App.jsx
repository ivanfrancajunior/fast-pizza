import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/orders/CreateOrder";
import User from "./features/user/User.jsx";
import Cart from "./features/cart/Cart.jsx";
import Order from "./features/orders/Order";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order/new", element: <CreateOrder /> },
  { path: "/order/:id", element: <Order /> },
  { path: "/user", element: <User /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
