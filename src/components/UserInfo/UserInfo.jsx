import React from "react";
import AvatarComp from "../Avatar";
function UserInfo({ author }) {
  return (
    <div>
      <AvatarComp avatar={author.avatarUrl} />
      <div>Hello {author.name}</div>
    </div>
  );
}

export default UserInfo;
