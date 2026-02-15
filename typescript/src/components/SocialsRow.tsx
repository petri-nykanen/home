import { motion } from "motion/react";
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
    <motion.div
      className="justify-center grid grid-cols-2 md:flex md:space-x-4 mt-2 min-w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      {socialIcons.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.4 + index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-20 shadow-md shadow-black/20 rounded-full mx-auto"
          />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialsRow;
