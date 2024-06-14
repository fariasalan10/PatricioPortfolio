import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-3xl text-center"
      >
        Experiences
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 lg:flex"
            >
              <p className="mb-2 text-xl text-neutral-500 mx-auto">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 max-w-xl"
            >
              <h3 className="mb-2 font-bold">{experience.role}</h3>
              <span className="text-sm text-violet-500">
                {experience.company}
              </span>
              <p className="mt-2 mb-4 text-sm text-neutral-500">
                {experience.description}
              </p>
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-7 rounded bg-violet-900 px-2 py-1 text-xs text-neutral-300 font-medium"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
