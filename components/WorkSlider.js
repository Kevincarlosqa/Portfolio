// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// icons
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaGithub,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next Image
import Image from "next/image";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Imperium Gym",
          path: "/imperiumgym.png",
          description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiFramer key="frame" />,
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "Articles",
          path: "/html.png",
          description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiFramer key="frame" />,
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "Title",
          path: "/thumb4.jpg",
          description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiFramer key="frame" />,
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "Title",
          path: "/thumb4.jpg",
          description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiFramer key="frame" />,
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "Title",
          path: "/thumb4.jpg",
          description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiFramer key="frame" />,
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "Title",
          path: "/thumb4.jpg",
          description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiFramer key="frame" />,
          ],
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      initialSlide={1}
      spaceBetween={15}
      loopAdditionalSlides={1}
      slidesPerGroup={1}
      pagination={true}
      loop={true}
      modules={[EffectCoverflow, Pagination]}
      // className="mySwiper"
      className="h-[280px] w-[800px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide
            key={index}
            className="border-white border-2 rounded-3xl px-3 py-3"
          >
            <div className="  gap-4 cursor-pointer">
              {slide.images.map((image, indexImg) => (
                <div
                  key={indexImg}
                  className=" overflow-hidden items-center justify-center flex flex-col "
                >
                  <div className="flex rounded-xl items-center justify-center relative overflow-hidden group ">
                    {/* image */}
                    <Image src={image.path} alt="" width={500} height={300} />

                    {/* overlay gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-l from-transparent
                    via-[#0dc6ab] to-[#0d96a0] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    ></div>
                    {/* title */}
                    <div
                      className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                      group-hover:xl:-translate-y-10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">LIVE</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        {/* icon */}
                        <div
                          className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all
                          duration-300 delay-200"
                        >
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-accent text-2xl py-2 mt-2">
                    <h1>{image.title}</h1>
                  </div>
                  <div>
                    <p className="text-sm text-center">{image.description}</p>
                  </div>
                  <div className="flex flex-row gap-5">
                    {image.stack.map((icon, index) => (
                      <div key={index} className="text-2xl text-white mt-6">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="https://github.com/Kevincarlosqa/gym-project"
                    target="_blank"
                    className="text-4xl pt-4 pb-3"
                  >
                    <FaGithub className="hover:text-accent transition-all duration-300 hover:scale-125" />
                  </Link>
                </div>
              ))}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
