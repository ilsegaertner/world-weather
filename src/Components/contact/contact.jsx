import React from "react";
import FooterComponent from "../footer-component/footer";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import {
  Text,
  DataList,
  Flex,
  Box,
  Card,
  Button,
  Avatar,
} from "@radix-ui/themes";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        className="mb-80 sm:mb-10 3xl:max-w-6xl m-auto"
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
        <div className=" p-10 sm:leading-9 m-auto text-gray-100 h-screen mb-64 mt-8 sm:mb-24">
          <Flex
            gap="6"
            justify="between"
            className="flex-col sm:flex-row-reverse"
          >
            <Box className="sm:basis-96">
              <Text align="left" as="p" size="3" className="my-" wrap="pretty">
                Thank you for your interest in contacting us!<br></br> <br></br>{" "}
                We value your feedback, inquiries, and suggestions. Whether you
                have questions about our app, need assistance, or want to
                collaborate, we're here to help.{" "}
              </Text>
            </Box>

            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              layout
              transition={{
                duration: 0.01,
                type: "spring",
                stiffness: 549,
                mass: 1,
                damping: 32,
              }}
            >
              <Box maxWidth="440px">
                <Card>
                  <Box>
                    <Flex gap="6" align="center" className="mb-8">
                      <Avatar
                        size="5"
                        src={logo}
                        radius="full"
                        fallback="WWA"
                      />

                      <Text
                        as="p"
                        size="2"
                        weight="medium"
                        style={{ color: "var(--gray-a11)" }}
                        wrap="pretty"
                        highContrast
                        // color="orange"
                      >
                        Please feel free to reach out to us using the contact
                        information below:
                      </Text>
                    </Flex>

                    <DataList.Root
                      orientation={{ initial: "vertical", sm: "horizontal" }}
                      style={{ color: "var(--gray-a11)" }}
                    >
                      <DataList.Item>
                        <DataList.Label minWidth="88px">Email</DataList.Label>
                        <DataList.Value>
                          <Text weight="medium">
                            <Link href="mailto:contact@worldweatherapp.com">
                              contact@worldweatherapp.com
                            </Link>{" "}
                          </Text>
                        </DataList.Value>
                      </DataList.Item>
                      <DataList.Item>
                        <DataList.Label minWidth="88px">Phone</DataList.Label>

                        <DataList.Value>
                          <Text weight="medium">+1 (555) 123-4567</Text>
                        </DataList.Value>
                      </DataList.Item>
                      <DataList.Item>
                        <DataList.Label minWidth="88px">Address</DataList.Label>
                        <DataList.Value>
                          <Text weight="medium">
                            World Weather App <br></br>Potsdamer Str. 64
                            <br></br> 13353 Berlin
                          </Text>
                        </DataList.Value>
                      </DataList.Item>
                    </DataList.Root>
                  </Box>
                </Card>
              </Box>
            </motion.div>
          </Flex>

          <Flex
            justify="between"
            className="flex-col sm:flex-row-reverse items-end"
          >
            <Box className="mt-10 sm:basis-96">
              <Text align="left" size="3" as="p">
                <p className="m">
                  We strive to respond to all inquiries promptly.
                </p>

                <p className="mt-10">
                  We look forward to hearing from you and assisting you with any
                  weather-related needs. Thank you for choosing World Weather
                  App!
                </p>
              </Text>
            </Box>
            <Box>
              {" "}
              <div className="mt-10">
                <Button className="bg-yellow-200 p-3 sm:p-4 rounded-lg text-gray-900 hover:bg-yellow-300 duration-200 ">
                  <Link to="/weather">
                    <Text size="3">Back to Home</Text>
                  </Link>
                </Button>{" "}
              </div>
            </Box>
          </Flex>
        </div>
      </motion.div>
      <FooterComponent />
    </>
  );
};

export default Contact;
