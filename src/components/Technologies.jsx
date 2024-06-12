import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 py-16">
      <h2 className="my-8 text-center text-3xl">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4 items-center my-10">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-900 p-4"
        >
          <RiReactjsLine className=" text-6xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-900 p-4"
        >
          <RiReactjsLine className=" text-6xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-900 p-4"
        >
          <RiReactjsLine className=" text-6xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-900 p-4"
        >
          <RiReactjsLine className=" text-6xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-900 p-4"
        >
          <RiReactjsLine className=" text-6xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-900 p-4"
        >
          <RiReactjsLine className=" text-6xl text-cyan-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
