import React, { useState } from "react";

const BackgroundColor = () => {
  const [color, setColor] = useState("white");

  const colorHandler=(bgColor)=>{
        setColor(bgColor)
  }


  return (
    <div style = {{backgroundColor:color, height:"100vh"}}>
      <button onClick={()=>colorHandler("red")}>Red</button>
      <button onClick={()=>colorHandler("blue")}>Blue</button>
      <button onClick={()=>colorHandler("green")}>Green</button>
      <button onClick={()=>colorHandler("black")}>Black</button>
      <button onClick={()=>colorHandler("orange")}>Orange</button>
      <button onClick={()=>colorHandler("tomato")}>Tomato</button>
    </div>
  );
};

export default BackgroundColor;
