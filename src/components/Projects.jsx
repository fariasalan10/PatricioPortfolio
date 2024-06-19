import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4 px-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mt-20 text-center text-3xl"
      >
        Proyectos
      </motion.h2>
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-20 mt-10 text-center text-sm"
      >
        ¡Haz click en la imágen para ver el proyecto!
      </motion.h3>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 lg:flex justify-center items-center  my-4"
            >
              <a
                href={project.url}
                className="flex justify-center items-center w-fit h-fit"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: 350, height: 300 }}
                  className="rounded-3xl lg:mx-auto"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h3 className="text-2xl mb-2 font-bold">{project.title}</h3>
              <p className="mt-2 mb-4 text-sm text-neutral-500">
                {project.description}
              </p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-violet-900 px-2 py-1 text-xs text-neutral-300 font-medium "
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

export default Projects;
