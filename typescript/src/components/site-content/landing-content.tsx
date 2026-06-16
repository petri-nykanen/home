import { Button } from "@mantine/core";
import petriImage from "../../assets/images/petri3.png";
import { motion } from "motion/react";
const LandingContent = () => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src={petriImage}
          alt="Petri Nykänen"
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.div
          className="text-center min-w-full bg-white rounded-md border-6 p-6 border-teal-400 shadow-md shadow-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            <motion.p
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h1 className="text-2xl font-bold font-doto">Petri Nykänen</h1>
              <br />
              <b>Web Developer</b>
              <br />
              TypeScript | React | Node.js | Python | Front-End
            </motion.p>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              petri.nykaenen@gmail.com
              <br />
              +358505355193
              <br />
              <Button variant="outline" color="indigo">
                Contact me
              </Button>
            </motion.span>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default LandingContent;
