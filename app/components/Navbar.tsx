"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="border-black border-b-2 bg-white shadow-lg backdrop-blur-lg">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="p-2 border-2 border-black/60 hover:scale-105 bg-white my-2 rounded-2xl shadow-2xl">
          <Link href="/">
            <Image alt="logo" src="/logo.png" width={50} height={50} />
          </Link>
        </div>

        <nav className="hidden lg:flex gap-5 2xl:ml-16">
          <Link
            href="/"
            className={`text-lg ring-1 ring-[#1C2541] hover:ring-2 p-1 rounded-sm px-3 transition duration-100 ${
              pathname === "/"
                ? "bg-blue-500/60 text-white font-semibold"
                : "text-black hover:text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/all"
            className={`text-lg ring-1 ring-[#1C2541] hover:ring-2 p-1 rounded-sm px-3 transition duration-100 ${
              pathname === "/all"
                ? "bg-blue-500/60 text-white font-semibold"
                : "text-black hover:text-black"
            }`}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`text-lg ring-1 ring-[#1C2541] hover:ring-2 p-1 rounded-sm px-3 transition duration-100 ${
              pathname === "/about"
                ? "bg-blue-500/60 text-white font-semibold"
                : "text-black hover:text-black"
            }`}
          >
            About us
          </Link>
        </nav>

        <div className="flex divide-x">
          <Button
            onClick={() => handleCartClick()}
            className="flex bg-white ring-1 ring-black hover:ring-2 hover:rounded-xl hover:scale-105 rounded-lg"
          >
            <FaShoppingCart className="text-black hover:scale-105" />
          </Button>
        </div>
      </div>
    </header>
  );
}
