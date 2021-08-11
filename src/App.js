import React, { useState } from "react";
import Box from "./Components/Box";
import "./App.css";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {
  const [box1, setBox1] = useState(0);
  const [box2, setBox2] = useState(0);

  const change = (num) => {
    setBox2(box1);
    setBox1(num);
  };

  return (
    <div className="App">
      {arr.map((i) => {
        return (
          <Box
            selected={box1 === i || box2 === i}
            number={i}
            change={change}
          ></Box>
        );
      })}
    </div>
  );
};

export default App;
