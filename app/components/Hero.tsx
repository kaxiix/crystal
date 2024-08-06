import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-semibold tracking-widest text-6xl md:text-8xl bg-clip-text text-transparent font-exo2 text-white">
          Choose Fresh
        </h1>
      </div>

      {/* Mobile Navigation Links */}
    </section>
  );
};

export default Hero;
