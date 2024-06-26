import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { update_name } from "./userSlice";
import { useNavigate } from "react-router-dom";
function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(update_name(username));

    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-8 text-sm text-stone-600 md:text-xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input_field mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
