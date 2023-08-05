// next image
import Image from "next/image";

// next link
import Link from "next/link";

import Lottie from "lottie-react";
import base from "../public/projects.json";

// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-50 border rounded-2xl hover:bg-black/30 ">
      <Link
        href="/work"
        className="relative w-[100px] h-[100px] xl:w-[250px] xl:h-[50px] px-3 flex justify-center
         items-center  bg-cover bg-center bg-no-repeat group"
      >
        {/* <Image
          src="/rounded-text.png"
          alt=""
          width={141}
          height={148}
          className="animate-spin-slow xl:w-full xl:h-full w-[75px] h-[75px] max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute xl:text-4xl text-2xl transition-all duration-300 hover:scale-125" /> */}
        <h1 className="text-xl w-auto whitespace-nowrap text-accent font-bold pr-2">
          See my projects
        </h1>
        <Lottie animationData={base} />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
