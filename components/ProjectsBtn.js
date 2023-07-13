// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-50">
      <Link
        href="/work"
        className="relative w-[100px] h-[100px] xl:w-[185px] xl:h-[185px] flex justify-center
         items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          alt=""
          width={141}
          height={148}
          className="animate-spin-slow xl:w-full xl:h-full w-[75px] h-[75px] max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute xl:text-4xl text-2xl transition-all duration-300 hover:scale-125" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
