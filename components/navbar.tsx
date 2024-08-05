"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Sun, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  useEffect(() => {
    // Define the media query
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // Adjust to your breakpoint for medium size screens

    // Function to handle media query changes
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) {
        // Close menu when screen size is medium or larger
        setMenuOpen(false);
      }
    };

    // Add listener for media query changes
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="relative flex w-full h-full justify-center items-center m-0">
      <div className="flex justify-between items-center w-full max-w-screen-xl px-4">
        {/* Logo */}
        <h1 className="m-2 p-5 whitespace-nowrap">Facilitator Pro</h1>

        {/* Links for larger screens */}
        <div className="hidden md:flex flex-nowrap m-2 p-5 gap-10">
          <Link href={"#"} className="whitespace-nowrap">
            Pricing
          </Link>
          <Link href={"#"} className="whitespace-nowrap">
            Dashboard
          </Link>
          <Link href={"#"} className="whitespace-nowrap">
            Sign In
          </Link>
          <Link href={"#"} className="whitespace-nowrap">
            Register
          </Link>
        </div>

        {/* Buttons for larger screens */}
        <div className="hidden md:flex gap-2 m-10 justify-end">
          <Button variant="ghost">
            Go to dashboard <ArrowRight className="mr-2 h-4 w-4" />
          </Button>
          <Button variant="ghost">
            <Sun />
          </Button>
        </div>

        {/* Menu button for smaller screens */}
        <div className="md:hidden m-2 p-5">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 lg:hidden flex flex-col items-center z-50 mb-10">
          <Link href={"#"} className="whitespace-nowrap p-2">
            Pricing
          </Link>
          <Link href={"#"} className="whitespace-nowrap p-2">
            Dashboard
          </Link>
          <Link href={"#"} className="whitespace-nowrap p-2">
            Sign In
          </Link>
          <Link href={"#"} className="whitespace-nowrap p-2">
            Register
          </Link>
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <Button variant="ghost">
              Go to dashboard <ArrowRight className=" h-4 w-6" />
            </Button>
            <Button variant="ghost">
              <Sun />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
