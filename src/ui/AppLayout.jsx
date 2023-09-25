import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import Loader from "./Loader.jsx";

export const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = useNavigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};
//TODO: ADICIONAR AO README O ESTATUS DE LOADIND COM NOVO ROUTER DOM
