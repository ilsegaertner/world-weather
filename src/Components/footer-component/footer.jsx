import React from "react";
import { Link } from "react-router-dom";
import logoGithub from "../../assets/logos/9025783_github_logo_icon.svg";
import logoTwitter from "../../assets/logos/8642365_ic_social_media_twitter_icon.svg";
import logoLinkedin from "../../assets/logos/4362961_linkedin_social media_icon.svg";

const FooterComponent = () => {
  return (
    <>
      <footer className="bg-gray-900 py-4 fixed bottom-0 w-screen">
        <div className="container mx-auto flex justify-between items-center gap-6 px-4 sm:px-10">
          <div className="footer-container_left">
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
          <div className="footer-container_right  flex-row">
            <div className="social-media flex flex-row gap-2">
              <Link to="/weather">
                <img src={logoGithub} alt="Github Logo" width={"22px"} />
              </Link>
              <Link>
                <img src={logoTwitter} alt="Twitter Logo" width={"22px"} />
              </Link>
              <Link>
                <img src={logoLinkedin} alt="LinkedIn Logo" width={"22px"} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
