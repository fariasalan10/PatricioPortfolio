import AboutMeImage from "../assets/AboutMe.jpg";
import { ABOUT_TEXT } from "../constants";

const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-3xl text-center">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={AboutMeImage} alt="About Me" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end">
            <p className="my-2 max-w-xl py-6 text-justify lg:text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;