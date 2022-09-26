import React, { useEffect, useRef, useState } from "react";
import CompanyCard from "./CompanyCard";
import ContentTitle from "./ContentTitle";

const VerticalLine = ({ position }) => {
  let className = "";

  switch (position) {
    case 1:
      className = "translate-y-[3rem]";
      break;
    case 2:
      className = "translate-y-[calc(2*3rem)]";
      break;
    case 3:
      className = "translate-y-[calc(3*3rem)]";
      break;
    case 4:
      className = "translate-y-[calc(4*3rem)]";
      break;
    default:
      break;
  }

  return (
    <div
      className={`border border-aquamarine h-12 absolute transition-transform ease-in-out duration-300 ${className}`}
    />
  );
};

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const experienceRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(experienceRef.current);
    if (isVisible) {
      observer.disconnect();
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div
      className={`flex-col pt-60 px-36 transition-all duration-1000 opacity-0 translate-y-72 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      ref={experienceRef}
    >
      <ContentTitle text="Where I’ve Worked" number="02." />
      <div className="flex-row content-start">
        <VerticalLine position={selectedItem} />
        <CompanyCard
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  );
};

export default Experience;
