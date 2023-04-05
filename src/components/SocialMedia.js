import React from "react";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";

const SocialMedia = () => {
  return (
    <div className="bottom-0 flex-col items-center hidden gap-5 md:fixed left-12">
      <a href="https://github.com/AlfaSakan" target="_blank" rel="noreferrer">
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/alfasakan/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      <a href="https://twitter.com/dev_loker" target="_blank" rel="noreferrer">
        <Twitter />
      </a>
      <a
        href="https://www.instagram.com/alfasakan/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram />
      </a>
      <div className="w-0 h-20 border border-white" />
    </div>
  );
};

export default SocialMedia;
