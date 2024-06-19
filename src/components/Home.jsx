import { HOME_CONTENT } from "../constants";
import profileImage from "../assets/PatricioLarriagaProfileImage.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: delay },
  },
});

const Home = () => {
  return (
    <div
      className="px-10 pt-10 border-b border-neutral-900 pb-20 lg:mb-50 flex flex-col lg:flex-row items-center justify-center"
      id="home"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="font-bold pb-5 text-5xl font-thin text-white lg:text-7xl items-center lg:items-start lg:mt-16"
            >
              PATRICIO LARRIAGA
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-slate-500 to-violet-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Data Analytics
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-5 max-w-xl py-5 font-light tracking-tight text-neutral-400 text-justify"
            >
              {HOME_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="pt-10 w-full lg:w-1/2 lg:p-8 my-auto">
          <div>
            <Link
              className="flex justify-center lg:justify-end items-center"
              to="about"
            >
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                className="rounded-full w-2/3 cursor-pointer"
                src={profileImage}
                alt="Patricio Larriaga"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
