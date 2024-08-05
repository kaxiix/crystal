import Image from "next/image";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div className="pt-10 lg:pt-0">
      <section className="w-full  md:px-20 md:py-10 bg-[url('/bg.svg')] bg-fixed border-b-2 ">
        <Image
          src="/about.jpg"
          width={1200}
          height={500}
          alt="About Us"
          className="aspect-[3/1] hover:scale-95 transition-transform duration-300 shadow-2xl w-full object-cover  md:rounded-xl border-2 border-[#409339]"
        />
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Our Company
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Welcome to Crystal Fruits Trading Co., your premier wholesale
              supplier of fresh fruits. We cater to large restaurant chains,
              hotels, and events, ensuring top-quality produce with every
              delivery.
            </p>
            <p className="text-muted-foreground md:text-xl">
              With countless trucks and extensive storage facilities, we
              guarantee the freshest fruits, delivered on time. Our strong
              partnerships with growers enable us to offer a diverse range of
              fruits year-round.
            </p>
            <p className="text-muted-foreground md:text-xl">
              At Crystal Fruits Trading Co., we prioritize quality, service, and
              sustainability. Experience the best in fresh fruit supply with us.
            </p>
            <p className="text-muted-foreground md:text-xl">
              Crystal Fruits Trading Co. – Freshness Delivered Daily.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Team
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Meet the talented individuals who make up our team. Each member
              brings a unique set of skills and experiences that contribute to
              the success of our company.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {/* <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/ow1.jpg"
                  width={200}
                  height={200}
                  alt="John Doe"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Mr. Monirul Islam
                </h3>
                <p className="text-muted-foreground">CEO</p>
              </div> */}
              {/* <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/ow2.jpg"
                  width={200}
                  height={200}
                  alt="Jane Smith"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">Mr. Ali Ammar</h3>
                <p className="text-muted-foreground">Angel Investor</p>
              </div> */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/ow3.jpg"
                  width={200}
                  height={200}
                  alt="Bob Johnson"
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Mr. Javed Hossain
                </h3>
                <p className="text-muted-foreground">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Crystal Fruits?
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Wholesale Food Supply</h3>
                <p className="text-muted-foreground">
                  We provide a wide range of high-quality food products,
                  including gourmet items, everyday essentials, and specialty
                  ingredients, to restaurants, hotels, and businesses.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  We offer our products at competitive prices, providing
                  excellent value without compromising on quality.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Reliable Delivery</h3>
                <p className="text-muted-foreground">
                  We ensure timely and reliable delivery of our products,
                  maintaining the freshness and quality of the goods from our
                  suppliers to our client&apos;s kitchens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
