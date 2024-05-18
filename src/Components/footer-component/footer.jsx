import React from "react";

const FooterComponent = () => {
  return (
    <>
      <div
        className="flex justify-center p-8 flex-col text-white
      "
      >
        {/* <p>Mimi</p>
        <p>Pamela</p>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p> */}
      </div>

      <footer className="bg-gray-800 py-8 ">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="footer-container_left flex gap-6">
            <a className="text-gray-300 font-semibold" href="legal-info.html">
              Legal Info | Impressum
            </a>
          </div>
          <div className="footer-container_right flex gap-6 flex-row">
            <p className="text-gray-300 font-semibold"></p>
            <div className="social-media flex flex-row">
              <a href="https://github.com/ilsegaertner" target="_blank">
                <img
                  src="img/github-mark-white.svg"
                  alt="Github Logo"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://twitter.com/JoachimPrugl" target="_blank">
                <img
                  src="img/x_logo.svg"
                  alt="Twitter Logo"
                  className="w-6 h-6 ml-2"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/joachim-pr%C3%BCgl/"
                target="_blank"
              >
                <img
                  src="img/icons8-linkedin-128.svg"
                  alt="LinkedIn Logo"
                  className="w-6 h-6 ml-2"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-300 mt-4">
          © Copyright 2024 | world-weather-app
        </p>
      </footer>
    </>
  );
};

export default FooterComponent;
