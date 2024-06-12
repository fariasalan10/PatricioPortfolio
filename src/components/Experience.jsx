import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-3xl text-center">Experiences</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/2 lg:flex">
              <p className="mb-2 text-sm text-neutral-500 mx-auto">
                {experience.year}
              </p>
            </div>
            <div className="w-full lg:w-1/2 max-w-xl">
              <h3 className="mb-2 font-bold">{experience.role}</h3>
              <span className="text-sm text-violet-500">
                {experience.company}
              </span>
              <p className="mt-2 text-sm text-neutral-500">
                {experience.description}
              </p>
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-violet-900 px-2 py-1 text-xs text-neutral-300 font-medium"
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

export default Experience;
