import Image from "next/image";
import { FaDownload, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Skills from "./Skills";
import Tools from "./Tools";

// Define the SOCIAL_LINKS object
const SOCIAL_LINKS = {
  GITHUB: "https://github.com/pratham0612",
};

const Intro = () => {
  return (
    <div className="intro-container h-screen flex flex-col">
      {/* Header */}
      <div className="headerr z-50 bg-MidNightBlack backdrop-blur-sm h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
        <Link href="https://pratham-panchal.netlify.app/">
          <Image
            className="w-24 h-24 object-cover rounded-full cursor-pointer"
            src={"/images/me.jpg"}
            alt="profile picture"
            width={150}
            height={150}
          />
        </Link>
        <p className="text-white text-lg font-normal">Pratham Panchal</p>
      </div>

      {/* Middle Components */}
      <div className="beech z-15 flex-1 flex flex-col overflow-y-auto space-y-6 divide-y divide-white px-4 no-scrollbar">
        <div className="border-t border-white"></div>
        <Download icon={<FaDownload />} />
        <Languages />
        <Tools />
        <Location />
        <Contact />
        <div className="flex justify-center items-center space-x-6 pt-4">
          <Link
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-xl text-Snow" />
          </Link>
        </div>
        <div className="border-t border-white"></div>
      </div>
    </div>
  );
};

export default Intro;
