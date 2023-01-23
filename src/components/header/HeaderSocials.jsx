import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linked.com" target="_blank">
        {" "}
        <BsLinkedin />{" "}
      </a>
      <a href="www.github.com" target="_blank">
        {" "}
        <BsGithub />{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
