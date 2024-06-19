import React from "react";
// import { Facebook, Instagram, Github, Mail } from "lucide-react";
import {
  resourcesLinks,
  communityLinks,
  platformLinks,
  socialMediaLinks,
} from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Platforms</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <br />
      <div className=" text-2xl text-center font-semibold mb-4 ">
        Social Media
      </div>
      <div className="flex justify-center gap-10">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="transition ease-in-out hover:text-cyan-500 duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
