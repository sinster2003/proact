"use client";

import { LucideProps } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { ForwardRefExoticComponent, RefAttributes, useEffect, useState } from "react"

interface SidebarLinkProps {
    Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    label: string,
    href: string
}

const SidebarLink = ({ Icon, label, href } : SidebarLinkProps) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    (pathname === href) ? setIsActive(true) : setIsActive(false);
  }, [pathname]);
  
  return (
    <Link href={href}>
      <div className={`relative flex items-center gap-2 py-3 pl-8 justify-start text-gray-600 dark:text-white ${isActive && "bg-gray-200 bg-opacity-30"}`}>
        {isActive && <div className="absolute top-0 left-0 h-full w-[4px] bg-blue-primary"></div>}
        <Icon className="h-5 w-5"/>
        <p className="text-sm">{label}</p>
      </div>
    </Link>
  )
}

export default SidebarLink