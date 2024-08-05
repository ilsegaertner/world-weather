import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TabNav, Flex } from "@radix-ui/themes";

const NavigationBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <Flex
        direction="column"
        gap="4"
        pb="2"
        className="p-2 shadow-md rounded-b-2xl max-w-xs m-auto sm:ml-10 top-0 sm:fixed bg-gray-900 z-50 items-center "
      >
        <TabNav.Root size="2" color="orange">
          <TabNav.Link asChild active={pathname === "/about"}>
            <Link to="/about" className="text-gray-100">
              About
            </Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/weather"}>
            <Link to="/weather" className=" text-gray-100">
              Weather
            </Link>
          </TabNav.Link>
          <TabNav.Link asChild active={pathname === "/contact"}>
            <Link to="/contact" className="text-gray-100">
              Contact
            </Link>
          </TabNav.Link>
        </TabNav.Root>
      </Flex>
    </>
  );
};

export default NavigationBar;
