import React, { useState } from "react";
import Image from "next/image";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// icons
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  // SiFramer,
  SiRuby,
  SiRubyonrails,
  SiNextdotjs,
  SiThreedotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Skills",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiThreedotjs key="three" />,
          <SiTypescript key="typescript" />,
        ],
      },
      {
        title: "Backend Skills",
        icons: [
          // <FaFigma key="figma" />,
          // <SiAdobexd key="adobexd" />,
          // <SiAdobephotoshop key="photoshop" />,
          <SiRuby key="framer" />,
          <SiRubyonrails width={200} height={100} key="wordpress" />,
          <SiPostgresql key="postgres" />,
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Codeable",
        description:
          "Intensive full-stack web development educational program (full time, 6 months)",
        stage: "Lima, Peru - 2023",
      },
      {
        title: "Universidad Catolica de Santa Maria (UCSM)",
        description: "Bachelor in Mechatronics Engineering",
        stage: "2013 - 2021",
      },
      {
        title: "CEPROTEC",
        description: "Computer assembly, maintenance and repair",
        stage: "2011",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Smugglers’ Notch Resort",
        stage: "2018",
      },
      {
        title: "Sergear S.A.C.",
        stage: " 2014 – 2015",
      },
      // {
      //   title: "Web Developer - ABC Agency",
      //   stage: "2023 - 2023",
      // },
    ],
  },
  {
    title: "Hobbies",
    info: [
      {
        title: "Programming",
        stage:
          "I like to turn my creativity into code and solve problems that arise",
      },
      {
        title: "Meditation",
        stage: "I like to meditate to control my emotions and myself",
      },
      {
        title: "Music",
        stage:
          "I like to play music, I learned on my own to play various instruments such as guitar, piano and ukulele",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className=" pt-40 lg:pt-0 text-center min-h-screen xl:text-left bg-gradient-to-b  from-[#0B0205] to-[#142f48]">
      <Circles />
      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div> */}
      <div
        className="container mx-auto  min-h-screen flex flex-col items-center
        xl:flex-row gap-x-6"
      >
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mb-7">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Merging <span className="text-accent">passion and code </span>
            for cutting-edge web development.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am passionate about technology and its ability to transform our
            lives. With a background in Mechatronics Engineering and experience
            in Full-Stack web development, I have acquired a diverse set of
            skills to build complete applications and solutions.
          </motion.p>
          <div className="w-[200px] mx-auto shadow-xl border rounded-xl">
            <Image
              src="/profile.png"
              width={200}
              height={200}
              alt=""
              className="rounded-xl"
            />
          </div>
          {/* counters */}
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center w-full xl:max-w-[48%] xl:h-[480px] lg:min-h-screen h-[450px] lg:mt-[200px] "
        >
          <div className="flex  gap-x-4 xl:gap-x-8  xl:mx-0 mb-4  ">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : "after:bg-white "
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
              after:absolute after:-bottom-1 after:left-0 `}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
            items-center  xl:items-start"
          >
            {aboutData[index].info.map((item, itemInd) => (
              <div
                key={itemInd}
                className="flex-1 flex flex-col mx-auto
              max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-semibold text-accent mb-2 md:mb-0">
                  {item.title}
                </div>
                {/* <div className="hidden md:flex">-</div> */}
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemInde) => (
                    <div key={itemInde} className="text-3xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <div className="w-[300px] mx-auto shadow-xl border rounded-xl mb-[90px]">
            <Image
              src="/profile.png"
              width={300}
              height={300}
              alt=""
              className="rounded-xl"
            />
          </div> */}
        </motion.div>
        <div></div>
      </div>
    </div>
  );
};

export default About;

// (<motion.div
//   variants={fadeIn("right", 0.6)}
//   initial="hidden"
//   animate="show"
//   exit="hidden"
//   className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
// >
//   <div className="flex flex-1 xl:gap-x-6">
//     {/* experience */}
//     <div
//       className="relative flex-1 after:w-[1px] after:h-full
//     after:bg-white/10 after:absolute after:top-0 after:right-0"
//     >
//       <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//         <CountUp start={0} end={10} duration={5} />+
//       </div>
//       <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//         Years of experience
//       </div>
//     </div>
//     {/* clients */}
//     <div
//       className="relative flex-1 after:w-[1px] after:h-full
//     after:bg-white/10 after:absolute after:top-0 after:right-0"
//     >
//       <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//         <CountUp start={0} end={250} duration={5} />+
//       </div>
//       <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//         Satisfied Clients
//       </div>
//     </div>
//     {/* projects */}
//     <div
//       className="relative flex-1 after:w-[1px] after:h-full
//     after:bg-white/10 after:absolute after:top-0 after:right-0"
//     >
//       <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//         <CountUp start={0} end={650} duration={5} />+
//       </div>
//       <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//         Finished Projects
//       </div>
//     </div>
//     {/* awards */}
//     <div className="relative flex-1">
//       <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//         <CountUp start={0} end={8} duration={5} />+
//       </div>
//       <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//         Winning awards
//       </div>
//     </div>
//   </div>
// </motion.div>)
