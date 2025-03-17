import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      {/* <h1 className="text-8xl font-extrabold text-[#c4efdf] font-poppins">
          Full Stack 
        </h1>
        <h1 className="text-9xl font-black text-[#c4efdf] font-poppins">
          Software Engineer
        </h1> */}

      {/* <div className="text-center absolute inset-0 flex flex-col items-center justify-center z-0 pb-70">
        <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-9xl font-extrabold text-black dark:text-[#c4efdf] text-center">
          Fullstack <br />
          <span className="block sm:inline">Software Engineer</span>
        </h1>
      </div> */}

<div className="text-center absolute inset-0 flex flex-col items-center justify-center z-0 pb-70">
  <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-9xl font-extrabold text-black dark:text-[#c4efdf] text-center">
    <span className="typing-animation-line1">Fullstack</span>
    <br />
    <span className="typing-animation-line2">Software&nbsp;&nbsp;&nbsp;Engineer</span>
  </h1>
</div>


      {/* Image */}
      <img
        src="/portrait.png"
        alt="John Rey's Portrait"
        className="absolute bottom-0 w-[50%] sm:w-[50%] md:w-[40%] lg:w-[25%] mx-auto left-0 right-0"
      />
    </section>
  );
}
