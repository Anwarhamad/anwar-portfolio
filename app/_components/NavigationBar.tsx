import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";

function NavigationBar() {
  return (
    <nav className="fixed bottom-8 left-1/2 z-10 block w-8/12 -translate-x-1/2 transform rounded-full bg-black bg-opacity-30 p-5 backdrop-blur-md md:w-6/12 lg:w-4/12">
      <ul className="flex justify-evenly">
        <li>
          <Link href="#home" className="text-2xl text-white/50">
            <AiOutlineHome />
          </Link>
        </li>
        <li>
          <Link href="#projects" className="text-2xl text-white/50">
            <MdWorkOutline />
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-2xl text-white/50">
            <BiMessageSquareDetail />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
