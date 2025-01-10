import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="intro" className="mt-4 mb-10 lg:mb-0">
      <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span>{currentYear} All Rights Reserved.</span>
        </div>
        <div className="flex items-center">
          <a href="#" target="_blank" rel="noreferrer">
            Made with ❤️ by{" "}
            <span className="text-BlueViolet">Pratham Panchal</span>
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-1 text-base">
            <MdMail />
          </div>
          <a href="mailto:prathampanchal1122@gmail.com" className="text-LightGray">
            prathampanchal1122@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
