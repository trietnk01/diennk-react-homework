import React, { useState } from "react";

function BoxComp() {
  const [numberBox, setNumberBox] = useState(0);
  const [dataBox, setDataBox] = useState([]);
  function handleChange(event) {
    setNumberBox(event.target.value);
  }
  function handleCheckedIsNumber(event) {
    console.log("event = ", event);
    let checked = false;
    let keyCode = event.which;
    if (keyCode >= 48 && keyCode <= 57) {
      checked = true;
    }
    if (checked === false) {
      event.preventDefault();
    }
  }
  function handleSearch(event) {
    event.preventDefault();
    let data = new Array(0);
    let countBox = 0;
    if (parseFloat(numberBox).toString() !== "NaN") {
      countBox = numberBox;
    }
    if (countBox > 0) {
      for (let i = 0; i < countBox; i++) {
        let id = Math.floor(Math.random() * 999999 + 1);
        let name = `Box ${i + 1}`;
        let boxItem = {
          id,
          name,
        };
        data.push(boxItem);
      }
    }
    setDataBox(data);
  }
  const handleBoxClick = (name) => () => {
    alert(name);
  };
  return (
    <form className="boxComponent mx-auto px-10 mt-10" onSubmit={handleSearch}>
      <div className="flex justify-center">
        <div className="border flex boxSearch justify-between items-center">
          <input className="bg-transparent outline-0 grow" placeholder="Type text..." name="numberBox" value={numberBox} onChange={handleChange} onKeyPress={handleCheckedIsNumber} />
          <button type="submit" name="btnSearch" value="Search" className="bg-cyan-600 text-white py-1 px-2 btnSearch h-full items-center justify-center">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {dataBox.length === 0 ? null : (
        <div className="flex gap-1 mt-10 flex-wrap">
          {dataBox.map((item) => {
            return (
              <div onClick={handleBoxClick(item.name)} key={item.id} className="flex items-center justify-center w-24 h-24 border bg-cyan-400 border-black">
                {item.name}
              </div>
            );
          })}
        </div>
      )}
    </form>
  );
}

export default BoxComp;
