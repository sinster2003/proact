"use client";

import { toggleState } from "@/lib/features/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Menu } from "lucide-react";

const Hamburger = () => {
  const { isSideBarOpen } = useAppSelector((state) => state.sidebarSlice);

  const dispatch = useAppDispatch();
  
  if(!isSideBarOpen) {
    return (
      <div className="p-2 cursor-pointer dark:text-white text-gray-800 hover:bg-gray-400 dark:hover:bg-white dark:hover:text-gray-800 hover:bg-opacity-20 rounded-full" 
        onClick={() => dispatch(toggleState(true))}
      >
        <Menu className="h-[18px] w-[18px]"/>
      </div>
    )
  }
}

export default Hamburger