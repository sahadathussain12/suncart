"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@heroui/react";
import logo from "../../public/suncart.png";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "My Profile", href: "/profile" },
  ];

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="SunCart" width={45} height={45} />
          <h2 className="text-2xl font-bold text-amber-500">
            <em>SunCart</em>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`pb-1 font-medium transition ${
                  pathname === item.href
                    ? "border-b-2 border-purple-500 text-purple-500"
                    : "hover:text-purple-500"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {!isPending &&
            (!user ? (
              <>
                <Link href="/signup">
                  <Button 
                    variant="bordered" 
                    className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-medium"
                  >
                    Sign Up
                  </Button>
                </Link>

                <Link href="/signin">
                  <Button 
                    className="bg-amber-500 text-white hover:bg-amber-600 font-medium shadow-sm"
                  >
                    Sign In
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/profile"
                  className="flex items-center gap-3"
                >
                  <span className="font-medium text-zinc-700">
                    {user.name}
                  </span>

                  <Image
                    src={user.image || "/user.png"}
                    alt={user.name}
                    width={42}
                    height={42}
                    className="rounded-full border object-cover"
                  />
                </Link>

                <Button
                  color="danger"
                  radius="full"
                  startContent={<FiLogOut />}
                  onPress={handleSignOut}
                >
                  Logout
                </Button>
              </>
            ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-zinc-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-5 py-5 shadow-inner">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium block ${
                    pathname === item.href
                      ? "text-purple-500 font-bold"
                      : "text-zinc-600"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {!isPending &&
              (!user ? (
                <>
                  <li className="pt-2">
                    <Link
                      href="/signup"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="bordered"
                        className="w-full border-zinc-300 text-zinc-700"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/signin"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        className="w-full bg-amber-500 text-white"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="pt-2 border-t border-zinc-100">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/profile"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3"
                      >
                        <Image
                          src={user.image || "/user.png"}
                          alt={user.name}
                          width={42}
                          height={42}
                          className="rounded-full border object-cover"
                        />
                        <span className="font-medium text-zinc-700">
                          {user.name}
                        </span>
                      </Link>

                      <Button
                        color="danger"
                        radius="full"
                        isIconOnly
                        onPress={handleSignOut}
                      >
                        <FiLogOut size={20} />
                      </Button>
                    </div>
                  </li>
                </>
              ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;