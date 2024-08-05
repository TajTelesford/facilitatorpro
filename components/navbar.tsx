"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { ArrowRight, Menu, Sun } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <div className="flex w-full h-full justify-center items-center m-0 bg-red-500">
      <div className="flex justify-between items-center w-full max-w-screen-xl px-4">
        {/* Logo */}
        <h1 className="m-2 p-5">Facilitator.io</h1>

        {/* Links for larger screens */}
        <div className="hidden md:flex flex-nowrap m-2 p-5 gap-5">
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
          <Button variant="ghost" className="">
            <Sun />
          </Button>
        </div>

        {/* Menu button for smaller screens */}
        <div className="md:hidden m-2 p-5">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu />
          </Button>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {menuOpen && (
        <div className=" left-0 right-0 mt-2 bg-red-500 lg:hidden flex flex-col items-center">
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
          <div className="flex flex-col gap-2 p-2">
            <Button variant="ghost">
              Go to dashboard <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" className="">
              <Sun />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
