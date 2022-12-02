import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDog, getName } from "../Redux/action";

const NavBar = () => {
  const navigate = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleName = (e) => {
    dispatch(getName(input));
  };
  return (
    <div className="nav-container">
      <button className="btn-home" onClick={() => dispatch(getDog())}>X</button>
      <div className="searchbar">
        <form
          className="parent"
          onSubmit={(e) => {
            e.preventDefault();
            if (!input) alert("Name...?");
            else {
              handleName();
              setInput("");
            }
          }}
        >
          <input
            className="bar"
            value={input}
            onChange={handleInput}
            type="text"
            placeholder="Search Name..."
          />
          <input className="search" type="submit" value="Go!" />
        </form>
        <button>X</button>
      </div>
      <Link to="/create">NEW DOG!</Link>
    </div>
  );
};

export default NavBar;
