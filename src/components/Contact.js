import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import ContentTitle from "./ContentTitle";

const Contact = () => {
  const contactRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(contactRef.current);
    if (isVisible) {
      observer.disconnect();
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div
      className={`items-center flex-col py-40 px-52 opacity-0 translate-y-72 transi duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
      ref={contactRef}
    >
      <ContentTitle text="What's Next?" number="04." />
      <div className="flex-col items-center">
        <h1 className="text-5xl mb-1">Get In Touch</h1>
        <p className="text-slate text-center">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <Button
          className="w-54 mt-12 text-sm"
          paddingTop={20}
          paddingBottom={20}
          width={100}
          text="Say Hello"
          onClick={() => {
            window.location = "mailto:alfasakan11@gmail.com";
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
