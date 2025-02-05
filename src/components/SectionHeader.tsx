'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({ duration: 100, easing: "ease-in-out", once:false, mirror: true, }); // Reduced duration
  }, []);

  return (
    <>
      <div
        className="flex justify-center"
        data-aos="fade-up" // Animation for the eyebrow text
      >
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2
        className="font-serif text-3xl text-center mt-6 md:text-5xl"
        data-aos="fade-up" // Animation for the heading
        data-aos-delay="50" // Reduced delay for smoother appearance
      >
        {title}
      </h2>
      <p
        className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl"
        data-aos="fade-up" // Animation for the description
        data-aos-delay="100" // Reduced delay
      >
        {description}
      </p>
    </>
  );
};
