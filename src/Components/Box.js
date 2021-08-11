import React from "react";

const Box = ({ selected, number, change }) => {
  return (
    <div
      style={{
        backgroundColor: selected ? "green" : "blue",
        color: selected ? "black" : "white",
        border: "1px solid black",
        height: "50px",
        width: "100px",
      }}
      onClick={() => change(number)}
    >
      {`#Box ${number}`}
    </div>
  );
};

export default Box;
