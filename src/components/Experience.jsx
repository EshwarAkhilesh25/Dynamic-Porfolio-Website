import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useSelector } from "react-redux";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "text-secondary" }}
    contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
    date={experience.date}
    iconStyle={{ background: "#060816", color: "#aaa6c3" }}
  >
    <div>
      <h3 className="text-secondary text-[24px] font-bold">
        {experience.title}
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-#915eff-100 text-[14px] pl-1 tracking-wider "
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const exp = portfolioData?.intro || {};
  const {
    title = "",
    company = "",
    period = "",
    description1 = "",
    lottieUrl = "",
    description2 = "",
  } = exp;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work So Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <motion.p variants={textVariant()}>
        <div className=" absolute top-0 right-20 mt-10 mr-10 ">
          <div className="h-[35vh]">
            <dotlottie-player
              src="https://lottie.host/c9992358-94ec-43d2-8cbf-727b9bdd2c1b/lBvNaLy5rQ.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </motion.p>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";
// import "react-vertical-timeline-component/style.min.css";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";
// import { useSelector } from "react-redux";

// const ExperienceCard = ({ experience }) => (
//   <VerticalTimelineElement
//     contentStyle={{ background: "#1d1836", color: "#aaa6c3" }}
//     contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
//     date={experience.period}
//     iconStyle={{ background: "#060816", color: "#aaa6c3" }}
//   >
//     <div>
//       <h3 className="text-secondary text-[24px] font-bold">
//         {experience.title}
//       </h3>
//       <p
//         className="text-secondary text-[16px] font-semibold"
//         style={{ margin: 0 }}
//       >
//         {experience.company}
//       </p>
//     </div>
//     <ul className="mt-5 list-disc ml-5 space-y-2">
//       <li className="text-#915eff-100 text-[14px] pl-1 tracking-wider">
//         {experience.description1}
//       </li>
//       <li className="text-#915eff-100 text-[14px] pl-1 tracking-wider">
//         {experience.description2}
//       </li>
//     </ul>
//   </VerticalTimelineElement>
// );

// const Experience = () => {
//   const { loading, portfolioData } = useSelector((state) => state.root);
//   const exp = portfolioData?.intro || [];

//   // Check if exp is an array before attempting to map over it
//   const experienceElements = Array.isArray(exp)
//     ? exp.map((experience, index) => (
//         <ExperienceCard key={experience.id} experience={experience} />
//       ))
//     : null;

//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>My Work So Far</p>
//         <h2 className={styles.sectionHeadText}>Work Experience</h2>
//       </motion.div>
//       <motion.div variants={textVariant()}>
//         <div className="absolute top-0 right-20 mt-10 mr-10">
//           <div className="h-[35vh]">
//             {/* Ensure your dotlottie-player component is rendered here */}
//           </div>
//         </div>
//       </motion.div>
//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline>{experienceElements}</VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");
