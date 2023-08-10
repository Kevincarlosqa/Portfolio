// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

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
  SiTailwindcss,
  SiStyledcomponents,
  SiThreedotjs,
  SiRuby,
  SiRubyonrails,
  SiPostgresql,
  SiTypescript,
  SiOpenai,
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
          title: "AIGearHub",
          path: "/aigearhub.webp",
          description:
            "SaaS project using OpenAI API and ReplicateAPI with authentication using Clerk and payment gateway with subscriptions using Stripe. Responsive design and styling with tailwind CSS.",
          stack: [
            <FaCss3 key="css" />,
            <SiTypescript key="ts" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiOpenai key="openai" />,
          ],
          repo: "https://github.com/Kevincarlosqa/AIToolProject",
          link: "https://aigearhub.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Imperium Gym",
          path: "/imperiumgym.webp",
          description:
            "Gym website with an attractive and fully responsive design. Animations made with framer motion and sending messages via email using EmailJS.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            // <SiNextdotjs key="next" />,
            <SiFramer key="frame" />,
          ],
          repo: "https://github.com/Kevincarlosqa/gym-project",
          link: "https://imperiumgym.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Get That Job - API",
          path: "/getthatjob-api.webp",
          description:
            "Full stack project developed to connect recruiters and professionals, recruiters can post jobs and track applications, professionals can apply for jobs and see the status of applications.",
          stack: [
            <SiRuby key="ruby" />,
            <SiRubyonrails key="rails" />,
            <SiPostgresql key="postgres" />,
          ],
          repo: "https://github.com/Kevincarlosqa/GetThatJob-API",
        },
      ],
    },
    {
      images: [
        {
          title: "Get That Job",
          path: "/gethatjob.webp",
          description:
            "Full stack project developed to connect recruiters and professionals, recruiters can post jobs and track applications, professionals can apply for jobs and see the status of applications.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            // <SiStyledcomponents key="emotion" />,
          ],
          repo: "https://github.com/Kevincarlosqa/GetThatJob",
          // link: "https://kevincarlosqa-blog.netlify.app/portfolio.html",
        },
      ],
    },

    {
      images: [
        {
          title: "Articles",
          path: "/html.webp",
          description:
            "Html and css layout project for sharing my articles and some projects.",
          stack: [<FaCss3 key="css" />, <FaHtml5 key="hmtl" />],
          repo: "https://github.com/Kevincarlosqa/Blog-UI",
          link: "https://kevincarlosqa-blog.netlify.app/portfolio.html",
        },
      ],
    },

    {
      images: [
        {
          title: "Portfolio",
          path: "/portfolio.webp",
          description:
            "Modern website to showcase personal projects, with an attractive design and links to the corresponding repositories on Github, providing an intuitive way to explore personal work and learn about technical skills applied.",
          stack: [
            // <FaCss3 key="css" />,
            // <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiFramer key="frame" />,
            <SiTailwindcss key="tailwind" />,
            <SiThreedotjs key="three" />,
          ],
          repo: "https://github.com/Kevincarlosqa/Portfolio",
          link: "https://www.kevincarlosqa.dev/",
        },
      ],
    },
    {
      images: [
        {
          title: "Personal Blog",
          path: "/blog.webp",
          description:
            "Project with a grapql based database using hygraphcms to share what I have learned in the technology sector.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiTailwindcss key="tailwind" />,
          ],
          repo: "https://github.com/Kevincarlosqa/Blog",
          link: "https://kevincarlosqa-blog.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Tweetable",
          path: "/tweetable.webp",
          description:
            "Twitter simulation with user interface and authentication with Github (Omniauth) that adds an additional security aspect, each user can create, delete, edit and like Tweets.",
          stack: [
            <FaCss3 key="css" />,
            <FaHtml5 key="hmtl" />,
            <SiRuby key="ruby" />,
            <SiRubyonrails key="rails" />,
            <SiPostgresql key="postgres" />,
          ],
          repo: "https://github.com/Kevincarlosqa/Tweetable",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={isMobile ? 1 : 3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      initialSlide={1}
      spaceBetween={15}
      // loopAdditionalSlides={1}
      slidesPerGroup={1}
      pagination={true}
      loop={true}
      modules={[EffectCoverflow, Pagination]}
      // className="mySwiper"
      className={
        isMobile ? " h-[470px] w-[310px]" : "h-[480px] w-[800px] sm:h-[480px] "
      }
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide
            key={index}
            className="border-white border-2 rounded-3xl px-3 py-3"
          >
            <div className="  gap-4">
              {slide.images.map((image, indexImg) => (
                <div
                  key={indexImg}
                  className=" overflow-hidden items-center justify-center flex flex-col "
                >
                  <Link
                    href={image.link ? image.link : image.repo}
                    target="_blank"
                    className="flex rounded-xl items-center justify-center relative overflow-hidden group cursor-pointer"
                  >
                    {/* image */}
                    <Image src={image.path} alt="" width={500} height={200} />

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
                  </Link>
                  <div className="text-accent text-2xl font-bold py-2 mt-2">
                    <h1>{image.title}</h1>
                  </div>
                  <div>
                    <p className="text-sm text-center min-h-[120px]">
                      {image.description}
                    </p>
                  </div>
                  <div className="flex flex-row gap-5">
                    {image.stack.map((icon, index) => (
                      <div key={index} className="text-2xl text-white mt-6">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={image.repo ? image.repo : ""}
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
