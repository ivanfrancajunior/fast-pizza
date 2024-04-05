import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export async function loader() {
  const menu = await getMenu();
  return menu;
}
const Menu = () => {
  const menu = useLoaderData();

  return (
    <section>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </section>
  );
};

export default Menu;
