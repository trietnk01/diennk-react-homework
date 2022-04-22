import React from "react";

function UserItem({ onHandleClick }) {
  function handleClick(e, val) {
    onHandleClick(e, val);
  }
  return (
    <div>
      <button name="btnClick" type="button" onClick={() => handleClick(event, "text")}>
        Click
      </button>
    </div>
  );
}

export default UserItem;
