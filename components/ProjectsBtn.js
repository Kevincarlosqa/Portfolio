// next image
import Image from "next/image";
import dynamic from "next/dynamic";
// next link
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});
import base from "../public/projects.json";

// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto lg:w-auto w-[270px] xl:mx-0 lg:z-50 z-[100] border border-2 rounded-2xl hover:bg-black/30 ">
      <Link
        href="/work"
        className="relative  h-[50px] xl:w-[250px] xl:h-[50px] px-3 flex 
         items-center justify-center "
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
        <div className="w-[60px] h-[60px] lg:w-auto lg:h-auto">
          <Lottie animationData={base} />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
