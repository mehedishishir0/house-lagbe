"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-2 inset-x-2 sm:inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full shadow-sm z-50">
      <div className="h-full flex items-center justify-between px-2 sm:px-4">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold">House Rent</h1>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:flex gap-4" />

        {/* Search (hidden on mobile) */}
        <div className="hidden sm:flex flex-1 max-w-md mx-2 items-center">
          <Input
            className="rounded-full w-full"
            type="text"
            placeholder="Search your location"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full text-sm sm:text-base"
          >
            Sign In
          </Button>
          <Button className="rounded-full text-sm sm:text-base">
            Get Started
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
