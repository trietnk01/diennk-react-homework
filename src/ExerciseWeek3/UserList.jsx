import React from "react";
import UserItem from "./UserItem";

function UserList() {
  function handleClick(e, val) {
    console.log(e);
    console.log(val);
  }
  return (
    <div>
      <UserItem onHandleClick={handleClick} />
    </div>
  );
}

export default UserList;
