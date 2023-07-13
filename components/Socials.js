// next link
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const socialMedia = [
  { icon: <RiYoutubeLine />, link: "/" },
  { icon: <RiInstagramLine />, link: "/" },
  { icon: <RiFacebookLine />, link: "/" },
  { icon: <RiDribbbleLine />, link: "/" },
  { icon: <RiBehanceLine />, link: "/" },
  { icon: <RiPinterestLine />, link: "/" },
];
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-[20px] xl:text-[25px]">
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="hover:text-accent transition-all duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
