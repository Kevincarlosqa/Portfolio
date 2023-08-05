import {
  HiHome,
  HiUser,
  HiEnvelope,
  HiChatBubbleBottomCenterText,
  HiViewColumns,
  HiRectangleGroup,
} from "react-icons/hi2";

//  links
const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// Next Link
import Link from "next/link";

// next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-1 xl:bottom-0 mt-auto xl:right-[2%]
     z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen xl:scale-100 scale-[0.8] "
    >
      {/* inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-between 
      xl:justify-center gap-y-10 px-6 md:px-40 xl:px-0 h-[80px] xl:h-max py-8
       bg-white/10 backdrop-blur-sm text-3xl xl:text-xl rounded-full"
      >
        {links.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathName && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300 hover:scale-125`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] ">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>

              {/* icons */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
