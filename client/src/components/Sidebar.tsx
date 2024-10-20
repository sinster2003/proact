"use client";

import Image from "next/image";
import Tech from "@/public/tech-team.png";
import { Lock, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleState } from "@/lib/features/sidebar/sidebarSlice";

const Sidebar = () => {
  const { isSideBarOpen } = useAppSelector((state) => state.sidebarSlice);
  const dispatch = useAppDispatch();

    return (
      <div className={`min-h-screen bg-white shadow-2xl dark:bg-black transition-all duration-500 ease-in-out ${!isSideBarOpen ? "w-0 overflow-hidden" : "w-[200px] md:w-[300px]"}`}>
        {isSideBarOpen && <>
        {/* logo */}
        <div className="flex items-center justify-between">
          <h1 className="p-4 pt-6 ml-1.5 text-2xl font-bold text-gray-800 dark:text-white">
            Pro<span className="text-blue-primary">act</span>
          </h1>
          <div className="p-2 m-2 cursor-pointer dark:text-white text-gray-800 hover:bg-gray-400 dark:hover:bg-white dark:hover:text-gray-800 hover:bg-opacity-20 rounded-full" onClick={() => dispatch(toggleState(false))}>
            <X className="h-4 w-4" />
          </div>
        </div>

        <div className="my-4 flex items-center justify-start gap-2.5 border-y-[2px] border-gray-200 p-4 dark:border-gray-700">
          <Image src={Tech} alt="team-logo" width={48} height={48} />
          <div className="mr-2 flex flex-col gap-0.5 text-xl font-bold text-gray-800 dark:text-white">
            Tech Team
            <div className="flex items-center gap-1 text-gray-400 dark:text-gray-200">
              <Lock className="mt-[0.1rem] h-3 w-3" />
              <span className="text-xs tracking-wide">PRIVATE</span>
            </div>
          </div>
        </div>
        </>}
      </div>
    );

};

export default Sidebar;
