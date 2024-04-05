import { Link } from "react-router-dom";

const Button = ({
  children,
  is_submiting,
  to,
  type = "primary",
  handleAddToCart: onClick,
}) => {
  const raw_style =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-150 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-2.5";

  const styles = {
    primary: raw_style + " px-4 py-2.5 md:px-6 md:py-3.5",
    base: raw_style,
    round: raw_style + " px-4.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        className={styles[type]}
        disabled={is_submiting}
      >
        {" "}
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={is_submiting}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
