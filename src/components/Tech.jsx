import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useSelector } from "react-redux";

const Tech = () => {
  const techstack = [
    "Javascript",
    "CSS",
    "React js",
    "HTML",
    "Node js",
    "MongoDB",
  ];
  // const { loading, portfolioData } = useSelector((state) => state.root);
  // const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  // const skills = portfolioData?.skills || [];
  return (
    // <div className="py-5">
    //   <h1 className="text-secondary text-xl variants={textVariant()}">
    //     Here are a few technologies I have been working on

    //   </h1>
    // </div>

    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Here are a few technologies I have been working on
        </p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={textVariant()}
          className="flex flex-wrap gap-10 mt-5 variants={textVariant()}"
        >
          {techstack.map((tech, index) => (
            <div className="border border-[#915eff] py-3 px-10 rounded variants={textVariant()}">
              <h1 className="text-secondary">{tech}</h1>
            </div>
          ))}
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

// import React, { useState } from "react";
// import { SectionWrapper } from "../hoc";
// import { motion } from "framer-motion";
// import { textVariant } from "../utils/motion";
// import { styles } from "../styles";
// import { useSelector } from "react-redux";

// const Tech = () => {
//   const { loading, portfolioData } = useSelector((state) => state.root);
//   const [selectedItemIndex, setSelectedItemIndex] = useState(0);

//   const skills = portfolioData?.skills || [];
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>
//           Here are a few technologies I have been working on
//         </p>
//         <h2 className={styles.sectionHeadText}>My Skills</h2>
//       </motion.div>
//       <div className="w-full flex flex-wrap">
//         <motion.div variants={textVariant()} className="flex mt-5 gap-10">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="border border-[#915eff] rounded px-4 py-2 mr-2 mb-2"
//             >
//               <h1 className="text-secondary">{skill.skill}</h1>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Tech, "");
