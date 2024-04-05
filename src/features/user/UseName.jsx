import { useSelector } from "react-redux";

export const UseName = () => {
  const user_name = useSelector((state) => state.user.user_name);
  if (!user_name) return null;
  return (
    <h3 className="hidden text-sm font-semibold md:block ">{user_name}</h3>
  );
};
