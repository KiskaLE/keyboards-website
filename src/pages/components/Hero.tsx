/* eslint-disable @next/next/no-img-element */
import { type NextComponentType } from "next";
import { useEffect } from "react";

const Hero: NextComponentType = () => {
  const testImages = [
    {
      src: "/images/1.webp",
    },
    {
      src: "/images/2.webp",
    },
    {
      src: "/images/3.webp",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let translateValue = 0;
  useEffect(() => {
    let image = 0;
    console.log("ahoj");

    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      translateValue = image * 100;
      console.log("test");

      if (image >= testImages.length - 1) {
        image = 0;
      } else {
        image++;
      }
      const slide = document.getElementById("slide");
      if (slide != null) {
        slide.style.transform = `translate(-${window.innerWidth * image}px)`;
      }
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="-z-1 flex min-h-screen w-screen overflow-hidden bg-black">
        <div
          className={`flex translate-x-0 flex-row transition-all duration-500 ease-in-out`}
          id="slide"
        >
          {testImages.map((image) => {
            return (
              <>
                <div className="-z-50 w-[100vw]">
                  <img className="-z-50 w-full" src={image.src} alt="image" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
