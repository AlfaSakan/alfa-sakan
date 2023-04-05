import React, { useEffect, useRef, useState } from "react";
import CompanyCard from "./CompanyCard";
import ContentTitle from "./ContentTitle";

const VerticalLine = ({ position }) => {
  let className = "";

  switch (position) {
    case 1:
      className = "md:translate-y-[3rem] md:translate-x-0 translate-x-[4.3rem]";
      break;
    case 2:
      className =
        "md:translate-y-[calc(2*3rem)] md:translate-x-0 translate-x-[calc(2*4.3rem)]";
      break;
    case 3:
      className =
        "md:translate-y-[calc(3*3rem)] md:translate-x-0 translate-x-[calc(3*4.3rem)]";
      break;
    case 4:
      className =
        "md:translate-y-[calc(4*3rem)] md:translate-x-0 translate-x-[calc(4*4.3rem)]";
      break;
    default:
      break;
  }

  return (
    <div
      className={`border border-aquamarine md:h-12 md:w-0 w-[4.3rem] absolute transition-transform ease-in-out duration-300 ${className}`}
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
      className={`flex-col pt-60 px-6 md:px-36 transition-all duration-1000 opacity-0 translate-y-72 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      ref={experienceRef}
    >
      <ContentTitle text="Where I’ve Worked" number="02." />
      <div className="flex-col content-start md:flex-row">
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
