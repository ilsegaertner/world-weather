import React from "react";
import { Link } from "react-router-dom";
import logoGithub from "../../assets/logos/9025783_github_logo_icon.svg";
import logoTwitter from "../../assets/logos/8642365_ic_social_media_twitter_icon.svg";
import logoLinkedin from "../../assets/logos/4362961_linkedin_social media_icon.svg";

const FooterComponent = () => {
  return (
    <>
      <footer className="bg-gray-800 py-8 px-5 sm:px-10">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="footer-container_left flex gap-6">
            <Link
              to="/legal-info"
              className="text-gray-300 font-semibold"
              href="legal-info.html"
            >
              Legal Info | Impressum
            </Link>
          </div>
          <p className="text-center text-gray-300 text-xs">
            © Copyright 2024 | world-weather-app
          </p>
          <div className="footer-container_right flex gap-6 flex-row">
            <p className="text-gray-300 font-semibold"></p>
            <div className="social-media flex flex-row">
              <Link to="/weather">
                <img src={logoGithub} alt="Github Logo" className="w-6 h-6" />
              </Link>
              <Link>
                <img
                  src={logoTwitter}
                  alt="Twitter Logo"
                  className="w-6 h-6 ml-2"
                />
              </Link>
              <Link>
                <img
                  src={logoLinkedin}
                  alt="LinkedIn Logo"
                  className="w-6 h-6 ml-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
