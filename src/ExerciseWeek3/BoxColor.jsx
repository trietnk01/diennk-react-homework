import React, { useEffect, useState } from "react";
import BoxItem from "./BoxItem";

function BoxColor() {
  const [dataColor, setDataColor] = useState([]);
  const [defaultColor, setDefaultColor] = useState("");
  useEffect(() => {
    setDataColor(["#00d8ff", "#ff6c00", "#34c800", "#a500c8"]);
  }, []);
  function handleChangeColor(val) {
    if (val === defaultColor) {
      setDefaultColor("");
    } else {
      setDefaultColor(val);
    }
  }
  return (
    <div className="text-base text-black w-screen h-screen flex flex-col justify-center items-center">
      <div className="box">
        {dataColor.map((item) => {
          return <BoxItem key={item} bgColor={defaultColor ? defaultColor : item} defaultColor={item} onChangeColor={handleChangeColor} />;
        })}
      </div>
    </div>
  );
}

export default BoxColor;
