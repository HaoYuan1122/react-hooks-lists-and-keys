import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const coloritems=colors.map((item,index)=>{
    <li style={{item}} key={index}>{item}</li>
  })
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {coloritems}
      </ol>
    </div>
  );
}

export default ColorList;
