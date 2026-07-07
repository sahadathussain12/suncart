"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/suncart.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between  p-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="SunCart Logo"
            width={45}
            height={45}
            priority
          />
          <h2 className="text-2xl font-bold text-amber-500"><em>SunCart</em></h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link href="/" >
              Home
            </Link>
          </li>

          <li>
            <Link href="/products">
              Products
            </Link>
          </li>

          <li>
            <Link href="/profile">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/signup">
            <Button variant="outline">Sign Up</Button>
          </Link>

          <Link href="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-5 py-5">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/products" onClick={() => setOpen(false)}>
                Products
              </Link>
            </li>

            <li>
              <Link href="/profile" onClick={() => setOpen(false)}>
                My Profile
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 mt-6">
            <Link href="/signup">
              <Button
                variant="outline"
                className="w-full"
                onPress={() => setOpen(false)}
              >
                Sign Up
              </Button>
            </Link>

            <Link href="/signin">
              <Button
                variant="outline"
                className="w-full"
                onPress={() => setOpen(false)}
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;