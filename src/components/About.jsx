import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServerviceCard = ({ index, title, icon, content }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className={`text-white text-[20px] font-bold text-center`}>
            {title}
          </h3>
          <p className={`text-white text-[16px] text-center`}>{content}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}> Introduction </p>
        <h2 className={`${styles.sectionHeadText}`}> Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-secondary text-[16px] max-w-3xl leading-[30px] ${styles.paddingX} ${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        I'm Sk Mastan, a passionate and results-driven software developer with a strong foundation in full-stack development, machine learning, and blockchain technologies. With hands-on experience in building scalable web applications, automating intelligent systems, and enhancing cybersecurity solutions, I thrive at the intersection of innovation and real-world impact. From optimizing SQL performance with ML in hackathons to securing legal evidence with blockchain, I bring a problem-solving mindset and a commitment to excellence. I'm constantly exploring the latest in Gen AI, system design, and distributed computing to build future-ready solutions.
      </motion.p>

      <div className={`mt-20 flex flex-wrap gap-10 justify-center`}>
        {services.map((service, index) => (
          <ServerviceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
