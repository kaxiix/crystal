import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[url('/bg.svg')] bg-fixed py-8 md:py-12 w-full mt-20 border-t-2 border-black/50 ">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="    items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <div className="bg-white p-2 rounded-2xl shadow-2xl">
              <Image alt="logo" src={"/logo.png"} width={150} height={100} />
            </div>
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Navigation</h3>
          <Link href="/" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="/all" className="hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="/about" className="hover:underline" prefetch={false}>
            About
          </Link>
        </div>
        <div className="grid gap-1 ">
          <h3 className="font-semibold">JEDDAH</h3>
          <a href="mailto:accounts@crystalfruits.com">
            <p className="text-sm">accounts@crystalfruits.com</p>
          </a>
          <a href="https://wa.me/+966531024948" target="_blank">
            <p className="text-sm">+966507537467</p>
          </a>
          <p className="text-sm">Al Safa District</p>
          <p className="text-sm">Jeddah, Saudi Arabia</p>
          <a href="https://maps.app.goo.gl/qs5JZCkn1a5tUkLG6" target="_blank">
            <p className="text-sm">SEE ON MAP</p>
          </a>
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-muted-foreground">
            Developed by{" "}
            <a
              href="https://www.quixstudio.com"
              className=" font-bold text-orange-600 hover:underline"
              target="_blank"
            >
              QuixStudio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
