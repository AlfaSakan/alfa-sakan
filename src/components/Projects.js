import React, { useEffect, useRef, useState } from "react";
import ContentTitle from "./ContentTitle";

const tools = ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"];

const FramePicture = () => {
  return (
    <div className="relative rounded overflow-hidden w-145 h-90.5 bg-red-500">
      <img
        className="w-full h-full resize"
        alt="project"
        src="https://upload.wikimedia.org/wikipedia/id/thumb/c/cf/Vagabond21.jpg/640px-Vagabond21.jpg"
      />
      <div className="absolute bg-aquamarine w-full h-full top-0 opacity-50 transition-opacity hover:opacity-0 duration-500" />
    </div>
  );
};

const Projects = () => {
  const projectRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(projectRef.current);
    if (isVisible) {
      observer.disconnect();
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div
      className={`flex-col pt-60 pb-24 opacity-0 transition-all duration-1000 translate-y-72 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      ref={projectRef}
    >
      <ContentTitle text="Some Things I’ve Built" number="03." />
      <div className="relative">
        <FramePicture />
        <div className="absolute right-0 flex-col items-end justify-center min-h-[22.625rem]">
          <p className="font-mono text-xs text-aquamarine mb-2">
            Featured Project
          </p>
          <p className="text-2xl font-bold text-slate-lightest">
            Halcyon Theme
          </p>
          <div className="bg-navy-light w-108 mt-4 mb-6 p-4.8">
            <p className="text-slate-light text-lg">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>
          <div className="items-center gap-5">
            {tools.map((tool, i) => (
              <p
                key={i.toString() + tool}
                className="font-mono text-slate-light text-xs"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
