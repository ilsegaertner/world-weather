import React, { useEffect } from "react";
import { useState } from "react";

const NameComponent = () => {
  const [name, setName] = useState("");

  const onNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  // const handleSubmit = () => {
  //   // You can perform any action you want on button click, such as displaying an alert with the entered name
  //   alert(`Hello, ${name}!`);
  // };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div windowAlert></div>
        <div className="p-2">Name: </div>
        <input
          className="p-2 rounded-md"
          value={name}
          onChange={onNameChange}
        />{" "}
        {/* <button type="button" onClick={handleSubmit} className="m-10 bg-white">
          x
        </button> */}
        {/* <div className="p-2 bg-red-500 ">{name}</div> */}
      </div>
      <div className="p-2 bg-gray-200 inline-flex rounded-md absolute left-0 top-0 m-8">
        {" "}
        Hi {name || "there"}, how are you today?
      </div>
    </>
  );
};

export default NameComponent;
