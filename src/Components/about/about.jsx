import React from "react";
import FooterComponent from "../footer-component/footer";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.svg";
import styles from "../Card-Stack/styles.module.css"
import CardStack from "../Card-Stack/card-stack";
import {
  Text,
  Separator,
  Heading,
  Flex,
  Card,
  Box,
  Inset,
  Strong,
} from "@radix-ui/themes";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layout
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          // type: "spring",
          // stiffness: 549,
          // mass: 1,
          // damping: 32,
        }}
      >
        <div className="p-10 sm:leading-9 xl:max-w-6xl m-auto text-gray-100 h-screen">
          <Flex
            gap=""
            justify="between"
            className="flex-col sm:flex-row overflow-x-scroll"
          >
            <Box maxWidth="400px" minWidth="300px" className="z-0">
              <Card size="1">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>{" "}
                <Heading className="text-gray-900 text-xl">Our Story</Heading>
                {/* <hr></hr> */}
                <Text
                  as="p"
                  size="3"
                  className="mt-8 leading-6 text-gray-900 sm:leading-7"
                >
                  <Strong>World Weather App</Strong> was founded by a dedicated
                  team of meteorologists and tech enthusiasts who saw the need
                  for a user-friendly weather app that goes beyond basic
                  forecasts. <br></br> <br></br>We aimed to create a platform
                  that offers comprehensive weather insights and tools to make
                  your daily planning easier and more efficient.
                </Text>
              </Card>
            </Box>

            <Box maxWidth="400px" minWidth="370px" className="z-0">
              <Card size="1">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>{" "}
                <Heading className="text-yellow-400 text-xl">
                  What We Offer
                </Heading>
                <Separator />
                <Text as="div" size="3" className="mt-8 text-gray-900">
                  <p>
                    <strong>Today's Weather and Temperature:</strong> Get the
                    latest weather updates and current temperatures for your
                    location to help you plan your day effectively.
                  </p>
                  <p className="mt-8">
                    <strong>Five-Day Forecast:</strong> Stay ahead with our
                    detailed five-day weather forecast, providing you with an
                    extended outlook to organize your week.
                  </p>
                  <p className="mt-8">
                    <strong>Weather from Major Cities Worldwide:</strong>{" "}
                    Explore the weather conditions in major cities around the
                    globe with just a click, perfect for travel planning or
                    staying connected with loved ones far away.
                  </p>
                </Text>
              </Card>
            </Box>
            <Box maxWidth="400px" minWidth="300px" className="z-0">
              <Card size="1">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>{" "}
                <Heading className="text-yellow-400 text-xl leading-7">
                  {" "}
                  Why Choose World Weather App?
                </Heading>
                <Text as="div" size="3" className="mt-8 text-gray-900">
                  <p className="py-4">
                    <strong>Accuracy:</strong> Utilizing advanced forecasting
                    models and diverse data sources, we ensure highly accurate
                    weather predictions.
                  </p>
                  <p className="py-4">
                    <strong>User-Friendly Interface:</strong> Designed with
                    simplicity and ease of use in mind, World Weather App makes
                    it easy for users of all ages to navigate and find the
                    information they need.
                  </p>
                  <p className="py-4">
                    <strong>Global Coverage:</strong> Whether you’re at home or
                    traveling, World Weather App provides reliable weather data
                    for any location worldwide.
                  </p>
                  <p className="py-4">
                    <strong>Personalization:</strong> Customize your weather
                    experience with settings that match your preferences.
                  </p>
                </Text>
              </Card>
            </Box>
            <Box maxWidth="400px" minWidth="300px" className="z-0">
              <Card size="1">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>{" "}
                {/* </div> */}
                {/* <div className="p-10 rounded-xl sm:m-8 bg-gradient-to-l from-blue-700 leading-6 text-md  sm:leading-7 text-gray-100 mt-20"> */}
                <Heading className="text-yellow-400 text-xl">
                  Our Vision
                </Heading>
                <Text as="p" size="3" className="mt-8">
                  At World Weather App, we envision a world where everyone has
                  easy access to reliable weather information, making life safer
                  and more enjoyable. We are committed to continuously improving
                  our app with the latest technology and user feedback to ensure
                  you have the best weather experience possible.
                </Text>
              </Card>
            </Box>
            <Box maxWidth="400px" minWidth="300px" className="z-0">
              <Card size="1">
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>{" "}
                {/* </div> */}
                {/* <div className="p-10 rounded-xl sm:m-8 bg-gradient-to-r from-blue-700 leading-6 text-md sm:leading-7 text-gray-100 mt-20"> */}
                <Heading className="text-yellow-400 text-xl">
                  Connect with Us
                </Heading>
                <Text as="p" size="3" className="mt-8">
                  We love hearing from our users! If you have any questions,
                  feedback, or suggestions, please reach out to us through our
                  contact page or connect with us on social media. Stay updated
                  with our latest features and weather news by following our
                  blog.
                </Text>
                {/* </div> */}
              </Card>
            </Box>
          </Flex>
        </div>
        <div className={styles.container}> <CardStack /></div>
       
      </motion.div>

      <FooterComponent />
    </>
  );
};

export default About;
