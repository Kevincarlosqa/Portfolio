// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import {
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Front-end",
    description:
      "Design and development of attractive and responsive user interfaces.",
  },
  {
    icon: <RxPencil2 />,
    title: "Back-end",
    description:
      "Implementation of APIs and web services with Ruby on Rails and Postgresql",
  },
  {
    icon: <RxDesktop />,
    title: "Databases",
    description: "Database schema design, database optimization and querying.",
  },
  {
    icon: <RxReader />,
    title: "Responsive Design",
    description:
      "Adaptation of designs for optimal visualization on different devices.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Implementation of practices to improve search engine positioning.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((service, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="box bg-transparent sm:h-[180px] lg:h-[300px] lg rounded-2xl px-6 py-8 hover:shadow-xl
              flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
           transition-all duration-300 after:w-[340px] after:h-[180px] before:w-[340px] before:h-[180px] xl:after:w-[240px] xl:after:h-[300px] xl:before:w-[240px] xl:before:h-[300px]"
            >
              {/* icon */}
              <div className="boxEffect  px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0">
                <div className="text-4xl text-accent mb-4">{service.icon}</div>
                {/* title & description */}
                <div className="mb-8 ">
                  <div className="mb-2 text-lg">{service.title}</div>
                  <p className="max-w-[350px] leading-normal lg:h-[100px] h-[50px]">
                    {service.description}
                  </p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight
                    className="group-hover:rotate-45
                group-hover:text-accent transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
