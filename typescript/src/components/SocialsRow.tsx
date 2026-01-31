import React from "react";
import facebook from "../assets/images/facebook.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import instagram from "../assets/images/instagram.png";

const socialIcons = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/petri.nykaenen",
    icon: facebook,
  },
  { name: "GitHub", url: "https://github.com/petri-nykaenen", icon: github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/petri-nykaenen/",
    icon: linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/petri.nykaenen/",
    icon: instagram,
  },
];

const SocialsRow = () => {
  return (
    <div className="justify-center grid grid-cols-2 md:flex md:space-x-4 mt-2 min-w-full">
      {socialIcons.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-20 shadow-md shadow-black/20 rounded-full mx-auto"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialsRow;
