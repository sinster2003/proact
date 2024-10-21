"use client";

import Image from "next/image";
import Tech from "@/public/tech-team.png";
import { AlertCircle, AlertOctagon, AlertTriangle, Briefcase, ChevronDown, ChevronUp, Home, Layers3, Lock, Search, Settings, ShieldAlert, User, Users, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleState } from "@/lib/features/sidebar/sidebarSlice";
import SidebarLink from "./SidebarLink";
import { useState } from "react";

const Sidebar = () => {
  const { isSideBarOpen } = useAppSelector((state) => state.sidebarSlice);
  const dispatch = useAppDispatch();
  const [showProjects, setShowProjects] = useState(false);
  const [showPriorities, setShowPriorities] = useState(false);

    return (
      <div className={`z-50 h-screen overflow-y-scroll bg-white shadow-xl shadow-gray-200 dark:shadow-none dark:bg-black transition-all duration-500 ease-in-out ${!isSideBarOpen ? "w-0 overflow-hidden" : "w-[200px] md:w-[300px]"}`}>
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
            <span>Tech Team</span>
            <div className="flex items-center gap-1 text-gray-400 dark:text-gray-200">
              <Lock className="mt-[0.1rem] h-3 w-3" />
              <span className="text-xs tracking-wide">PRIVATE</span>
            </div>
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col mb-2">
          <SidebarLink Icon={Home} label="Home" href="/"/>
          <SidebarLink Icon={Briefcase} label="Timeline" href="/timeline"/>
          <SidebarLink Icon={Search} label="Search" href="/search"/>
          <SidebarLink Icon={Settings} label="Settings" href="/settings"/>
          <SidebarLink Icon={User} label="Users" href="/users"/>
          <SidebarLink Icon={Users} label="Teams" href="/teams"/>
        </div>
        
        {/* Projects Dropdown */}
        <div className="flex items-center gap-2 text-gray-500 w-11/12 cursor-pointer font-semibold pl-6 py-3 justify-between" onClick={() => setShowProjects(prev => !prev)}>
          <p className="text-sm dark:text-white">Projects</p>
          {
            !showProjects ?
              <ChevronDown className="h-3.5 w-3.5 mt-1.5"/> : 
              <ChevronUp className="h-3.5 w-3.5 mt-1.5"/>
          }
        </div>

        {/* Priorities Dropdown */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 w-11/12 cursor-pointer font-semibold pl-6 py-3 justify-between" onClick={() => setShowPriorities(prev => !prev)}>
            <p className="text-sm dark:text-white">Priorities</p>
            {
              !showPriorities ?
                <ChevronDown className="h-3.5 w-3.5 mt-1.5"/> : 
                <ChevronUp className="h-3.5 w-3.5 mt-1.5"/>
            }
          </div>
          {showPriorities && <div className="flex flex-col mb-2">
            <SidebarLink Icon={AlertCircle} label="Urgent" href="/priority/urgent/"/>
            <SidebarLink Icon={ShieldAlert} label="High" href="/priority/high/"/>
            <SidebarLink Icon={AlertTriangle} label="Medium" href="/priority/medium/"/>
            <SidebarLink Icon={AlertOctagon} label="Low" href="/priority/low/"/>
            <SidebarLink Icon={Layers3} label="Backlog" href="/priority/backlog/"/>
          </div>}
        </div>
        </>}
      </div>
    );
};

export default Sidebar;
