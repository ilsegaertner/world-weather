import React from "react";
import { useState } from "react";

const MainComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-blue-300 rounded-3xl shadow-xl border-gray-600">
        <div className="flex flex-col bg-gray-300 max-w-md m-auto p-12">
          <h1 className="font-bold pt-5 text-3xl">State handling</h1>
          <div className="justify-center">
            <ul className="flex justify-center">
              <li>
                {" "}
                <button
                  className=" m-4 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg text-gray-800 font-bold py-2 px-2 rounded-lg hover:text-grey-300"
                  onClick={() => setCount((count) => count + 1)}
                >
                  Click Me
                </button>
              </li>
              <li>
                <button
                  className="m-4 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg text-gray-800 font-bold py-2 px-2 rounded-lg hover:text-grey-300"
                  onClick={() => {
                    setCount((count) => 0);
                  }}
                >
                  Reset
                </button>
              </li>
            </ul>
          </div>

          <div>Count: {count}</div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
