import React, { useEffect, useRef, useState } from "react";
import ContentTitle from "./ContentTitle";

const skills = [
  "JavaScript",
  "React",
  "NodeJs",
  "Typescript",
  "NextJs",
  "Golang(backend)",
  "ExpressJs(backend)",
  "Docker",
];

const About = () => {
  const aboutRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(aboutRef.current);
    if (isVisible) {
      observer.disconnect();
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div
      className={`pt-60 flex-col pl-12 opacity-0 transition-all duration-1000 translate-y-72 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      ref={aboutRef}
    >
      <ContentTitle text="About Me" number="01." />
      <div className="about-content-container flex-1 gap-8 justify-start">
        <div className="flex-col max-w-lg gap-4">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid px-3 gap-3 grid-cols-2">
            {skills.map((skill, index) => {
              return (
                <li
                  className="tex-slate text-xs font-mono"
                  key={`${index} ${skill}`}
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative z-10">
          <img
            className="w-72 h-72 rounded peer"
            alt="profile"
            src="https://upload.wikimedia.org/wikipedia/id/thumb/c/cf/Vagabond21.jpg/640px-Vagabond21.jpg"
          />
          <div className="w-[18.75rem] h-[18.75rem] border border-aquamarine rounded absolute top-5 left-5 -z-10 transition-transform duration-500 ease-out peer-hover:-translate-x-3 peer-hover:-translate-y-3" />
        </div>
      </div>
    </div>
  );
};

export default About;
