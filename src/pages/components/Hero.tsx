import { type NextComponentType } from "next";
import { useEffect } from 'react';

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
 let translateValue = 0;
  useEffect(() => {
    let image = 0
    console.log("ahoj");
    
    const interval = setInterval(() => {
      translateValue = image*100;
      console.log("test");
      
      if (image >= testImages.length-1) {
        image = 0;
      }else {
        image++;
      }
        const slide = document.getElementById("slide");
        if (slide != null) {
          slide.style.transform = `translate(-${window.innerWidth*image}px)`;
        }
      
    }, 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return () => {
    clearInterval(interval)
  }
  }, []);

  return (
    <>
      <div className="flex min-h-screen w-screen overflow-hidden bg-black">
        <div
          className={`flex flex-row transition-all duration-500 ease-in-out`}
          id="slide"
        >
          {testImages.map((image) => {
            return (
              <>
                <div className="w-[100vw]">
                  <img className="w-full" src={image.src} alt="image" />
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
