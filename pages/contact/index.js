// components
import Circles from "../../components/Circles";
import ParticlesContact from "../../components/ParticlesContact";
import EarthCanvas from "../../components/canvas/Earth";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(isMobile);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0205] via-[#2C1B47] to-[#724C9D]">
      <div
        className="container mx-auto py-32 text-center xl:text-left flex flex-col xl:flex-row
        items-center justify-center h-full"
      >
        <ParticlesContact />
        {render && (
          <div className="h-[250px] w-[250px]">
            <EarthCanvas />
          </div>
        )}
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {"Let's"} <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full xl:w-[80%] mx-auto z-10"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
            </div>
            <input type="email" placeholder="email" className="input" />
            {/* <input type="text" placeholder="subject" className="input" /> */}
            <textarea placeholder="message" className="textarea"></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px]
              px-8 transiton-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group"
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500"
              >
                {"Let's"} talk
              </span>
              <BsArrowRight
                className="-transition-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
        {!render && (
          <div className="h-[500px] w-[500px]">
            <EarthCanvas />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
