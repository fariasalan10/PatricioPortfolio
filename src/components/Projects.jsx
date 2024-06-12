import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-3xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-4 rounded-2xl lg:mx-auto"
              />
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <h3 className="text-2xl mb-2 font-bold">{project.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
