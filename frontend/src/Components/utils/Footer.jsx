import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[10vh] w-full flex justify-center items-center">
      <div className="flex justify-between w-[100%] h-[100%] bg-opacity-5 bg-white border-white backdrop-blur-3xl px-4">
        <div className="flex items-center text-white gap-1 text-xl">
          <FaRegCopyright size={"15px"} color="white" />
          <p style={{fontFamily:'pixel',fontSize:'15px'}} className="mt-1">All Rights Reserved</p>
        </div>
        <div className="flex items-center">
          <FaGithub size={"22px"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;