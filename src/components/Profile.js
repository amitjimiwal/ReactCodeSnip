import React, { useState } from "react";
import { App3Context } from "../App3";
import { useContext } from "react";
const Profile = () => {
  const { username, setusername } = useContext(App3Context);
  const [newUsername, setnewUsername] = useState("");
  function handlechange(event) {
    setnewUsername(event.target.value);
  }
  function changeusername() {
    setusername(newUsername);
  }
  return (
    <div>
      USer is : {username}
      <div>
        <input type="text" onChange={handlechange} />
        <button onClick={changeusername}>CHange username</button>
      </div>
    </div>
  );
};

export default Profile;
