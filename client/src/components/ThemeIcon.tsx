"use client";

import { toggleTheme } from "@/lib/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const ThemeIcon = () => {
  const theme = useAppSelector((state) => state.themeSlice);
  const dispatch = useAppDispatch();

  // set the theme at the initial state fetching from localStorage
  useEffect(() => {
    const themeState = localStorage.getItem("theme");

    if(themeState) {
      dispatch(toggleTheme(JSON.parse(themeState)));
    }
  }, []);

  useEffect(() => {
    if (theme.isDarkMode) {
      // add class="dark" to html root
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      // add class="light" to html root
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme.isDarkMode]);

  return (
    <div
      className="flex cursor-pointer items-center justify-center rounded-lg p-3 text-white hover:bg-gray-50 hover:text-gray-800"
      onClick={() => {
        dispatch(toggleTheme(!theme.isDarkMode));
        localStorage.setItem("theme", JSON.stringify(!theme.isDarkMode));
      }}
    >
      {!theme.isDarkMode ? (
        <Moon className="h-5 w-5 text-gray-800" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </div>
  );
};

export default ThemeIcon;
