import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const user = useSelector((state) => state.user.user_name);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-5xl font-semibold">
        The best pizza.
        <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user === "" ? (
        <CreateUser />
      ) : (
        <Button to={"/menu"}>continue ordering, {user}</Button>
      )}
    </div>
  );
}

export default Home;
