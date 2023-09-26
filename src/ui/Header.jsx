import { Link } from "react-router-dom";
import Searchorder from "../features/orders/Searchorder";

const Header = () => {
  return (
    <>
    <Link to="/">
      <h2>FastPizza Co.</h2>
    </Link>
    <Searchorder/>
    <p>user name</p>
    </>
  );
};

export default Header;
