"use client";

import { toggleState } from "@/lib/features/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Menu } from "lucide-react";

const Hamburger = () => {
  const { isSideBarOpen } = useAppSelector((state) => state.sidebarSlice);

  const dispatch = useAppDispatch();
  
  if(!isSideBarOpen) {
    return (
        <Menu className="h-4 w-4 dark:text-white text-gray-800 cursor-pointer" onClick={() => dispatch(toggleState(true))}/>
    )
  }
}

export default Hamburger