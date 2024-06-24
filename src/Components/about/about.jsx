import React from "react";
import FooterComponent from "../footer-component/footer";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.svg";
import { Text, Separator, Heading, Flex, Card, Box } from "@radix-ui/themes";
import HeadingSecond from "../heading-second/heading-second";
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
          duration: 0.1,
          ease: "easeInOut",
          // type: "spring",
          // stiffness: 549,
          // mass: 1,
          // damping: 32,
        }}
      >
        <HeadingSecond />
        <div className="md:px-24 lg:px-36 xl:px-36 xl:max-w-8xl text-gray-100  bg-gray-900">
          <Flex>
            <div className="flex-1 sm:p-10 p-3 leading-6 text-lg sm:leading-9 m-5 sm:m-8 sm:text-2xl text-gray-100 ">
              <p>
                Welcome to World Weather App, your trusted source for accurate
                and timely weather updates! <br></br>
                <br></br>Our mission is to provide you with reliable weather
                information to help you plan your day and stay safe, no matter
                where you are.
              </p>
            </div>
            <div className="flex-1"></div>
          </Flex>

          <motion.div>
            {/* <div className="p-10 rounded-xl sm:m-8 bg-gradient-to-r from-blue-700 text-gray-100 mt-40"> */}
            <Flex className="">
              {" "}
              <Box flexBasis="300rem">
                <Card>
                  {" "}
                  <Heading className="text-yellow-400 text-xl">
                    Our Story
                  </Heading>
                  {/* <hr></hr> */}
                  <Text
                    as="p"
                    size="3"
                    className="mt-8 leading-6 text-md  sm:leading-7"
                  >
                    World Weather App was founded by a dedicated team of
                    meteorologists and tech enthusiasts who saw the need for a
                    user-friendly weather app that goes beyond basic forecasts.{" "}
                    <br></br> <br></br>We aimed to create a platform that offers
                    comprehensive weather insights and tools to make your daily
                    planning easier and more efficient.
                  </Text>
                </Card>
              </Box>
              {/* </div> */}
              {/* <div className="p-10 rounded-xl sm:m-8 pr-24 bg-gradient-to-l from-blue-700 leading-6 text-md  sm:leading-7 text-gray-100 mt-20"> */}{" "}
              <Box>
                <Card>
                  {" "}
                  <Heading className="text-yellow-400 text-xl">
                    What We Offer
                  </Heading>
                  <Separator />
                  <Text as="div" size="3" className="mt-8">
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
              {/* </div> */}
              {/* <div className="p-10 rounded-xl sm:m-8 bg-gradient-to-r from-blue-700 leading-6 text-md  sm:leading-7 text-gray-100 mt-20"> */}
              <Box>
                <Card>
                  <Heading className="text-yellow-400 text-xl">
                    {" "}
                    Why Choose World Weather App?
                  </Heading>
                  <Text as="div" size="3" className="mt-8">
                    <p className="py-4">
                      <strong>Accuracy:</strong> Utilizing advanced forecasting
                      models and diverse data sources, we ensure highly accurate
                      weather predictions.
                    </p>
                    <p className="py-4">
                      <strong>User-Friendly Interface:</strong> Designed with
                      simplicity and ease of use in mind, World Weather App
                      makes it easy for users of all ages to navigate and find
                      the information they need.
                    </p>
                    <p className="py-4">
                      <strong>Global Coverage:</strong> Whether you’re at home
                      or traveling, World Weather App provides reliable weather
                      data for any location worldwide.
                    </p>
                    <p className="py-4">
                      <strong>Personalization:</strong> Customize your weather
                      experience with settings that match your preferences.
                    </p>
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card>
                  {/* </div> */}
                  {/* <div className="p-10 rounded-xl sm:m-8 bg-gradient-to-l from-blue-700 leading-6 text-md  sm:leading-7 text-gray-100 mt-20"> */}
                  <Heading className="text-yellow-400 text-xl">
                    Our Vision
                  </Heading>
                  <Text as="p" size="3" className="mt-8">
                    At World Weather App, we envision a world where everyone has
                    easy access to reliable weather information, making life
                    safer and more enjoyable. We are committed to continuously
                    improving our app with the latest technology and user
                    feedback to ensure you have the best weather experience
                    possible.
                  </Text>
                </Card>
              </Box>
              <Box>
                <Card>
                  {/* </div> */}
                  {/* <div className="p-10 rounded-xl sm:m-8 bg-gradient-to-r from-blue-700 leading-6 text-md sm:leading-7 text-gray-100 mt-20"> */}
                  <Heading className="text-yellow-400 text-xl">
                    Connect with Us
                  </Heading>
                  <Text as="p" size="3" className="mt-8">
                    We love hearing from our users! If you have any questions,
                    feedback, or suggestions, please reach out to us through our
                    contact page or connect with us on social media. Stay
                    updated with our latest features and weather news by
                    following our blog.
                  </Text>
                  {/* </div> */}
                </Card>
              </Box>
            </Flex>{" "}
          </motion.div>
          <p className="p-10 sm:m-8 mt-20">
            Thank you for choosing World Weather App. We’re excited to be your
            trusted weather partner, rain or shine!
          </p>

          <p className=" p-10 text-yellow-400 sm:m-8 justify-center flex text-4xl">
            <strong>World Weather App – Your Weather, Your Way.</strong>
          </p>
        </div>
      </motion.div>

      <FooterComponent />
    </>
  );
};

export default About;
