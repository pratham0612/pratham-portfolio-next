import Image from "next/image";
import { FaDownload, FaGithub } from "react-icons/fa";
import Link from "next/link"; // Import Link for navigation
import Contact from "./Contact";
import Download from "./Download";
import Languages from "./Languages";
import Location from "./Location";
import Skills from "./Skills";
import Tools from "./Tools";


// Define the SOCIAL_LINKS object
const SOCIAL_LINKS = {
  GITHUB: "https://github.com/pratham0612", // Your GitHub profile link
};

const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
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

  
      {/* middle components */}
      <div className="beech z-15 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
      <div className="border-t border-white"></div>
       <Download icon={<FaDownload />} />
        
        <Tools />
        <Languages/>
        <Location />
        <Contact />
        <div className="border-t border-white"></div>
      </div>

      {/* fixed at bottom */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaGithub />
        </Link>
      </div>
    </>
  );
};

export default Intro;
