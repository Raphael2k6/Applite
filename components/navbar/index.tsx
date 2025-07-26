import { LuBell } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

interface NavBarProps {
  setIsOpen: Function;
  isOpen?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ setIsOpen, isOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between w-full shadow-sm">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-12 bg-gray-100 flex items-center font-bold justify-center rounded">
          Applite
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <LuBell size={20} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
          RD
        </div>
        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <IoMenu />
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
