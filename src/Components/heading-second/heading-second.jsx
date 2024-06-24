import React from "react";
import { Text, Heading, Separator } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const HeadingSecond = () => {
  const location = useLocation();

  const urlHeading =
    location.pathname === "/about"
      ? "About Us"
      : location.pathname === "/contact"
      ? "Contact Us"
      : "Welcome";

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        transition={{
          duration: 0.1,
          ease: "easeInOut",
          // type: "spring",
          // stiffness: 549,
          // mass: 1,
          // damping: 32,
        }}
      >
        <Heading size="2" weight="light" className=" sm:px-10 leading-10 px-5 ">
          <Text as="span" className="text-gray-400 ">
            {urlHeading}
          </Text>{" "}
        </Heading>
        <Separator size="4" />
      </motion.div>
    </>
  );
};

export default HeadingSecond;
