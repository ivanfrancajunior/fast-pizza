import { Link } from "react-router-dom";
import SearchOrder from "../features/orders/SearchOrder";
import { UseName } from "../features/user/UseName";

const Header = () => {
  return (
    <header className="flex items-center justify-around flex-1 border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="uppercase tracking-widest">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <UseName />
    </header>
  );
};

export default Header;
