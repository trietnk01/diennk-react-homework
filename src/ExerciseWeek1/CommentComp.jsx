import React from "react";
import TextComp from "../components/Text";
import UserInfo from "../components/UserInfo";
import DateComp from "../components/Date";
function CommentComp(props) {
  let { comment } = props;
  return (
    <div className="flex w-96 mx-auto mt-10">
      <div className="w-1/4">
        <UserInfo author={comment.author} />
      </div>
      <div className="w-3/4">
        <TextComp text={comment.text} />
        <DateComp date={comment.date} />
      </div>
    </div>
  );
}
export default CommentComp;
