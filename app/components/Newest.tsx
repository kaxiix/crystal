import Image from "next/image";
import React from "react";

const Newest = () => {
  const logos = [
    "/client1.jpg",
    "/client2.jpg",
    "/client3.jpg",
    "/client4.jpg",
    "/client5.jpg",

    // Add more logo paths as needed
  ];
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-4xl font-bold">Our clients</div>
        <div className="relative shadow-2xl mt-10 rounded-2xl bg-[#800000] overflow-hidden">
          <div className="flex items-center p-5  animate-scroll  space-x-4">
            {logos.concat(logos).map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={src}
                  alt={`Logo ${index}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newest;
