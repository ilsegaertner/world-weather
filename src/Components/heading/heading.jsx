import React from "react";
import { Text } from "@radix-ui/themes";
import logo from "../../assets/logos/logo.svg";

const Heading = () => {
  return (
    <>
      <div className="z-40 mt-12 sticky top-0 w-full flex items-center pt-3 justify-center px-20 py-3 gap-3 align-middle bg-gray-900">
        <img
          src={logo}
          loading="lazy"
          className=" w-6"
          alt="World Weather App logo"
        />
        <Text
          as="div"
          size="7"
          weight="medium"
          className=" text-yellow-300 inline z-50"
        >
          <span className="text-white">World</span> Weather
          <span className="text-blue-400"> App </span>
        </Text>
      </div>
    </>
  );
};

export default Heading;
