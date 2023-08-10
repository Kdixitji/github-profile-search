import React, { useState } from "react";
import "./MainStyles.css";
import Card from "./Card";

const Main = () => {
  const [username, setUsername] = useState("");

  const handleSearchSubmit = (submitUsername) => {
    setUsername(submitUsername);
  };
  return (
    <div className="search-box">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchSubmit(e.target.username.value);
        }}
      >
        <input
          type="text"
          name="username"
          required
          placeholder="Enter User ID to search..."
        />
        <button className="search-btn">Show</button>
      </form>
      <Card username={username} />
    </div>
  );
};

export default Main;
