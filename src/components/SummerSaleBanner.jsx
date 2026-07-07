"use client";

import Lottie from "lottie-react";
import animation  from "../../public/summer.json"


import { FaFire, FaArrowRight } from "react-icons/fa";

const SummerSaleBanner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50 overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-pulse">
              <FaFire />
              Hot Deals 🔥
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Summer Sale
            </h1>

            <h2 className="text-6xl md:text-7xl font-extrabold text-red-500 mt-2">
              50% OFF
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Discover the hottest summer essentials including sunglasses,
              fashion, skincare, beach accessories and much more.
              Limited-time offer. Shop now before  gone.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg">
                Shop Now
                <FaArrowRight />
              </button>

              <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-8 py-4 rounded-xl font-semibold">
                Explore More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            {/* Background Glow */}
            <div className="absolute w-80 h-80 bg-red-300 rounded-full blur-3xl opacity-30"></div>

            {/* Discount Badge */}
            <div className="absolute top-4 right-0 z-20 bg-red-500 text-white w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-2xl animate-bounce">
              <span className="text-3xl font-bold">50%</span>
              <span className="text-sm">OFF</span>
            </div>

            {/* Lottie Animation */}
            <div className="w-full max-w-lg relative z-10">
              <Lottie
                animationData={animation}
                loop={true}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SummerSaleBanner;