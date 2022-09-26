import React from "react";

const ContentTitle = ({ text, number }) => {
  return (
    <div className="items-center mb-10">
      <span className="font-mono text-aquamarine text-xl">
        {number}
        <span className="font-sans text-slate-lightest text-3xl font-bold">
          {" "}
          {text}
        </span>
      </span>
      <div className="border border-navy-lightest w-80 text-2xl ml-6" />
    </div>
  );
};

export default ContentTitle;
