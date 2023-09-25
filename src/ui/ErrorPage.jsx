import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h2>Oops 😵</h2>
      <h3>SomeThing went wrong...</h3>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
