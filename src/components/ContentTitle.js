import React from "react";

const ContentTitle = ({ text, number }) => {
  return (
    <div className="items-center mb-10">
      <span className="font-mono text-xl text-aquamarine">
        {number}
        <span className="font-sans text-3xl font-bold text-slate-lightest whitespace-nowrap">
          {" "}
          {text}
        </span>
      </span>
      <div className="ml-6 text-2xl border border-navy-lightest w-80" />
    </div>
  );
};

export default ContentTitle;
