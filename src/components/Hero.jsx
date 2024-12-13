import { motion } from "framer-motion"; //animations
import { useSelector } from "react-redux";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // const { loading, portfolioData } = useSelector((state) => state.root);
  // const { intro } = portfolioData;
  // const { welcomeText, firstName, descriptionlottieUrl } = intro;
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero//background design */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40  violet-gradient " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there, I am <span className="text-[#915eff]">Alexandra</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am passionate and dedicated software engineer with a flair for
            crafting innovative solutions and embracing emerging technologies.
            With several years of experience in the tech industry, I thrive on
            tackling complex challenges and turning ideas into impactful
            software applications.
          </p>
        </div>
      </div>
      <div className=" absolute xs:bottom-5 bottom-20 w-full flex justify-center items-center ">
        <div className="h-[55vh]">
          <dotlottie-player
            src="https://lottie.host/f53e4c94-6471-43bc-89bf-18b6dc12dc7b/AOpttyRZh1.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
      <div className="absolute xs:bottom-1 bottom-33 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[75px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 35, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;

// import { motion } from "framer-motion"; //animations
// import { useSelector } from "react-redux";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   const { loading, portfolioData } = useSelector((state) => state.root);

//   // Check if portfolioData and its nested properties are not null before accessing them
//   const intro = portfolioData?.intro || {};
//   const {
//     welcomeText = "",
//     lottieUrl = "",
//     firstName = "",
//     description = "",
//   } = intro;

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       {/* Background design */}
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//       >
//         {/* Animation */}
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//           <div className="w-1 sm:h-80 h-40  violet-gradient " />
//         </div>
//         <div>
//           {/* Welcome text */}
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             {welcomeText} <span className="text-[#915eff]">{firstName}</span>
//           </h1>
//           {/* Description */}
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             {description}
//           </p>
//         </div>
//       </div>
//       {/* Lottie Animation */}
//       <div className=" absolute xs:bottom-5 bottom-20 w-full flex justify-center items-center ">
//         <div className="h-[55vh]">
//           <dotlottie-player
//             src={lottieUrl}
//             background="transparent"
//             speed="1"
//             loop
//             autoplay
//           ></dotlottie-player>
//         </div>
//       </div>
//       {/* Scroll Down Button */}
//       <div className="absolute xs:bottom-1 bottom-33 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[75px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.dev
//               animate={{
//                 y: [0, 35, 0],
//               }}
//               transition={{
//                 duration: 1,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
