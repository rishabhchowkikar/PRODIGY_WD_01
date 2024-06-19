import React from "react";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import img from "../assets/code.jpg";
const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6l text-center mt-6 tracking-wide ">
        Streamline Your{" "}
        <span className="bg-gradient-to-r from-sky-500 to-violet-800 text-transparent bg-clip-text">
          {" "}
          Development Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={img} alt="Code" />
        </div>
        <div className="pt-12 w=full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-cyan-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
