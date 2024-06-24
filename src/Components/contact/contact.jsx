import React from "react";
import FooterComponent from "../footer-component/footer";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import {
  Heading,
  Text,
  Separator,
  DataList,
  Flex,
  Box,
  Card,
  Button,
  Avatar,
} from "@radix-ui/themes";
import { motion } from "framer-motion";
import HeadingSecond from "../heading-second/heading-second";

const Contact = () => {
  return (
    <>
      {/* <div className="md:px-24 lg:px-48 xl:px-64  text-gray-100 xl:max-w-8xl bg-gray-900"> */}
      <HeadingSecond />

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
        <div className="mt-16 p-10 sm:leading-9 max-w-6xl m-auto text-gray-100">
          <Flex gap="" justify="between">
            <Box maxWidth="440px">
              <Text align="left" as="p" size="5" className="my-" wrap="pretty">
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

          <Box maxWidth="440px">
            <Text align="left">
              <p className="m">
                We strive to respond to all inquiries promptly.
              </p>

              <p className="mt-10">
                We look forward to hearing from you and assisting you with any
                weather-related needs. Thank you for choosing World Weather App!
              </p>
              <div className="mt-10">
                <Button className="bg-yellow-200 p-3 sm:p-4 rounded-lg text-gray-900 hover:bg-yellow-300 duration-200 sm:text-2xl">
                  <Link to="/weather">Back to Home</Link>
                </Button>{" "}
              </div>
            </Text>
          </Box>
        </div>
      </motion.div>
      {/* </div> */}
      <FooterComponent />
    </>
  );
};

export default Contact;
