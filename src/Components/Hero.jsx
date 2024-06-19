import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text sm:text-4xl lg:text-6xl text-center tracking-wide">
        "Empowering
        <span className="bg-gradient-to-r from-sky-500 to-violet-800 text-transparent bg-clip-text">
          {" "}
          Developers
        </span>{" "}
        with Visionary Tools for{" "}
        <span className="bg-gradient-to-r from-sky-500 to-violet-800 text-transparent bg-clip-text">
          {" "}
          Unbounded Realities
        </span>
        ."
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        "Unlock the full potential of your VR projects with VisionQuestVR's
        cutting-edge development tools. Empower your creativity and transform
        your innovative ideas into breathtaking immersive experiences today!"
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-sky-500 to-violet-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for Free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-700 shadow-sky-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-sky-700 shadow-sky-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default Hero;
