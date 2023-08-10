import React, { useEffect, useState } from "react";
import "./CardStyles.css";

const Card = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching github data:", error);
      });
  }, [username]);

  if (!userData) {
    return null;
  }

  const formatDate = (date) => {
    if (!date) {
      return "";
    }
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  };
  const handleVisitClick = () => {
    window.open(userData.html_url, "_blank"); // Opens the URL in a new tab
  };
  return (
    <div className="card-box">
      <div className="left">
        <img src={userData?.avatar_url} alt="" className="image" />
      </div>
      <div className="right">
        <div className="user-info">
          <p>
            Username:<span>{userData?.login}</span>
          </p>
          <p>
            Name:<span>{userData?.name}</span>
          </p>
          <p>
            Number of Public Repos:<span>{userData?.public_repos}</span>
          </p>
          <p>
            Number of Public gists:<span>{userData?.public_gists}</span>
          </p>
          <p>
            Profile Creation Date:
            <span>{formatDate(userData?.created_at)}</span>
          </p>
          <button className="button-71" onClick={handleVisitClick}>
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
