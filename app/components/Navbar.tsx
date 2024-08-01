"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { FaShoppingCart } from "react-icons/fa";

import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/all" },
  { name: "About us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className=" border-b-2 border-black/20  bg-[url('/bg.svg')] bg-fixed  backdrop-blur-lg bg-[#000080]/40   ">
      <div className="flex items-center   md:rounded-b-2xl  justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="p-2 hover:scale-105 bg-white my-2 rounded-2xl shadow-2xl shadow-[#000080]">
          <Link href="/">
            <Image
              className="   "
              alt="logo"
              src={"/logo.png"}
              width={50}
              height={50}
            />
          </Link>
        </div>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16 ">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-[#000080]"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100  hover:text-black"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x ">
          <Button
            onClick={() => handleCartClick()}
            className="flex bg-black hover:bg-black/70 w-[100px]     rounded-2xl"
          >
            <FaShoppingCart className="text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}
