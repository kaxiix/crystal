// components/Hero.tsx
import React from "react";

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
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">
          Tanjil didnt send vid after asking 50 times
        </h1>
        <h3 className="font-light text-3xl">and idk what to put here</h3>
      </div>
    </section>
  );
};

export default Hero;
