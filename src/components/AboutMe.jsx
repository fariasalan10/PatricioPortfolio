import AboutMeImage from "../assets/AboutMe.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="border-b py-10 px-20 flex flex-col  items-center justify-center border-neutral-900"
    >
      <h2 className="my-20 text-3xl text-center">
        Sobre <span className="text-neutral-500">Mi</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={AboutMeImage} alt="About Me" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-end">
            <p className="my-2 max-w-xl py-6 text-justify lg:text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
