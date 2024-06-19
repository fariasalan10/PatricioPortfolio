import { EDUCATION, EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="px-10 ">
      <div id="education" className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-20 text-3xl text-center"
        >
          Educación
        </motion.h2>
        <div>
          {EDUCATION.map((education, index) => (
            <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 lg:flex"
              >
                <p className="mb-2 text-sm text-neutral-500 mx-auto">
                  {education.year} <br />
                  <div className="text-sm">{education.ubication}</div>
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 max-w-xl "
              >
                <h3 className="mb-2 font-bold">{education.role}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-violet-500">
                    {education.company}
                  </span>
                  <a href={education.certificate}>
                    <span className="mr-2 mt-15 rounded bg-violet-900 px-2 py-1 text-xs text-neutral-300 font-medium">
                      Certificado
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div id="experience" className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-20 text-3xl text-center"
        >
          Experiencias
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
                <p className="mb-2 text-sm text-neutral-500 mx-auto">
                  {experience.year} <br />
                  <div className="text-sm">{experience.ubication}</div>
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 max-w-xl flex flex-col justify-center"
              >
                <h3 className="mb-2 font-bold">{experience.role}</h3>
                <span className="text-sm text-violet-500">
                  {experience.company}
                </span>
                <p className="mt-2 mb-4 text-sm text-neutral-500">
                  {experience.description}
                </p>
                <div className="flex flex-wrap">
                  {experience.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-2 rounded bg-violet-900 px-1 py-1 text-xs text-neutral-300 font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
