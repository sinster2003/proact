import { Search, Settings } from "lucide-react";
import Link from "next/link";
import ThemeIcon from "./ThemeIcon";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 text-gray-800 dark:bg-black">
      <div className="flex items-center gap-10">
      {/* Hamburger Button */}
        <Hamburger/>
        
        {/* Search Bar */}
        <div className="relative min-w-[200px]">
          <input
            className="w-full rounded-lg bg-gray-50 px-4 py-2 pl-10 placeholder:text-gray-800 focus:border-none focus:outline-none"
            placeholder="Search..."
          />
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
        </div>
      </div>

      <div className="flex items-center">
        {/* Theme Icon */}
        <ThemeIcon />

        {/* Settings Icon */}
        <div className="flex cursor-pointer items-center justify-center rounded-lg p-3 text-gray-800 dark:text-white hover:bg-gray-50 hover:dark:text-gray-800">
          <Link href="setting">
            <Settings className="h-5 w-5" />
          </Link>
        </div>

        <div className="mx-2 hidden min-h-[2em] w-[0.15rem] rounded-lg bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
