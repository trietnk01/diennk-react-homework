import React from "react";

function BoxItem({ bgColor, defaultColor, onChangeColor }) {
  const handleChangeColor = (val) => () => {
    onChangeColor(val);
  };
  return <div className="box__item" style={{ backgroundColor: bgColor }} onClick={handleChangeColor(defaultColor)}></div>;
}

export default BoxItem;
