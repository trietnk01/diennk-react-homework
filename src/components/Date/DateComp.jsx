import React from "react";

function DateComp({ date }) {
  let dateItem = date;
  let dateStr = dateItem.getDate().toString().padStart(2, 0) + "/" + (parseInt(dateItem.getMonth()) + 1).toString().padStart(2, 0) + "/" + parseInt(dateItem.getFullYear());
  return <div>{dateStr}</div>;
}

export default DateComp;
