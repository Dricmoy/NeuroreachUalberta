'use client'
import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { Header1 } from "@/components/header";
import { Spotlight } from "@/components/ui/spotlight";

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["pioneering minds", "expanding horizons"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-gradient-to-b from-purple-900 to-purple-500">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="container mx-auto">
        <div className="flex gap-8 min-h-screen items-center justify-center flex-col">
          <Header1></Header1>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-purple-300">
                Welcome to&nbsp;
                <span className="text-purple-400">Neuro</span><span className="text-purple-500">reach</span>
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                    style={{
                      color:
                        titleNumber === index ? "#250640" : "#4d1380", // Active color for red-violet and non-active for light purple
                    }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-purple-100 max-w-2xl text-center">
              At Neuroreach, we believe that understanding the brain isn’t just
              a pursuit, but a journey that transforms how we live, learn, and
              interact. Our club is dedicated to exploring the vast world of
              neuroscience through symposiums, discussion, and community
              engagement. Whether you’re a neuroscience student, passionate
              learner, or curious individual, Neuroreach is the place for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
