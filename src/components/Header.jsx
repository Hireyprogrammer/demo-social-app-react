import React, { useContext } from "react";
import { UserContext } from "../App";

function Header({ setUser }) {
  const user = useContext(UserContext);
  return (
    <>
      <br />
      <span>welcome {user}!</span>

      <button onClick={() => setUser("")}>Logout</button>
    </>
  );
}

export default Header;
