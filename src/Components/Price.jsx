import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const Price = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:6xl text-center my-8 tracking-wider">
        Pick Your
        <span className="bg-gradient-to-r from-sky-500 to-violet-800 text-transparent bg-clip-text">
          {" "}
          Perfect Plan
        </span>
        <br />
        <br />
        <p className="text-lg text-neutral-500 leading-normal">
          Begin with peace of mind — our 30-day risk-free guarantee ensures you
          can dive into VisionQuestVR worry-free.
        </p>
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mg-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-sky-500 to-violet-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <div className="text-sky-500  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full  ">
                      <CheckCircle2 />
                    </div>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gradient-to-r from-sky-500 to-violet-800 border border-violet-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
