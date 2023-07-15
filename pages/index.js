// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";
import Phoenix from "../components/Phoenix";

const Home = () => {
  return (
    <div className=" min-h-screen">
      {/* text */}
      {/* bg-gradient-to-r from-primary/10 via-black/30 to-black/10 */}
      {/* from-[#3e6294] via-[#303956] to-[#866f8d] */}
      {/* #142f48 */}
      <div className=" min-h-screen bg-gradient-to-b  from-[#0B0205] to-[#142f48]">
        <div
          className="text-center flex flex-col justify-center pt-40 xl:text-left
        h-full container mx-auto"
        >
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Connecting code and creativity,
            <br /> The power of a{" "}
            <span className="text-accent">Full Stack Web Developer</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I'm <span className="text-accent"> Kevin Quispe</span>, Passionate
            about technology and its transformative capacity in all aspects of
            life. My passion led me to pursue a degree in Mechatronics
            Engineering, where I had the opportunity to explore programming.
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:hidden  "
          >
            <ProjectsBtn className="" />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* particles */}

        <ParticlesContainer />

        {/* avatar img */}
        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full max-w-[500px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div> */}
        <div className="h-[100%] w-[100%] absolute left-[300px] top-[100px] xl:-bottom-32 lg:bottom-0 lg:right-[8%]">
          <Phoenix />
        </div>
      </div>
    </div>
  );
};

export default Home;
