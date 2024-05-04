import React from "react";

const LoopingComponent = ({ city }) => {
  const looping = () => {
    let i = 0;
    let output = city;
    do {
      output += i;
      i++;
    } while (i < 10);
    return output;
  };

  return (
    <>
      <div className="overflow-auto">City loop: {looping()} </div>
    </>
  );
};

export default LoopingComponent;
