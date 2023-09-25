import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export async function loader() {
  const menu = await getMenu();
  console.log(menu);
  return menu;
}
const Menu = () => {
  const menu = useLoaderData();

  return (
    <ul>{menu && menu.map((pizza) => <MenuItem key={pizza.id} pizza={pizza} />)}</ul>
  );
};

export default Menu;
