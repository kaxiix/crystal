// app/layout.tsx
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer";
import Link from "next/link";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });

export const metadata: Metadata = {
  title: "Crystal fruits",
  description: "Crystal fruits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={exo2.variable}>
      <body className="font-exo2">
        <CartProvider>
          <Navbar />
          <div className="relative">
            <nav className="lg:hidden absolute top-full left-0 right-0 z-50 w-full flex justify-around bg-black/60 text-white py-2">
              <Link href="/" className="px-4">
                Home
              </Link>
              <Link href="/all" className="px-4">
                Products
              </Link>
              <Link href="/about" className="px-4">
                About us
              </Link>
            </nav>
            <ShoppingCartModal />
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
