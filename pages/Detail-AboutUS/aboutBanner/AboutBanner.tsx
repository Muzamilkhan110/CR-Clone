import React from "react";
import Banner from "@/components/banner/Banner";
import { section } from "framer-motion/client";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <section>
      <div className="container-custom m-auto ">
        {/* Banner Section */}
        <div className="py-36 relative z-50 bg-black">
          <Banner
            title="Consistent insights"
            text="help guide your business choices with confidence."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
