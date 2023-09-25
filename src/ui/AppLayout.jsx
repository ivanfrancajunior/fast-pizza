import {Outlet} from 'react-router-dom'
import Header from "./Header.jsx"
import CartOverview from "../features/cart/CartOverview.jsx"
export const AppLayout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet />

        </main>
        <CartOverview />
    </div>
  )
}
