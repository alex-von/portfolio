"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}  >
      {isDarkMode ? (
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
