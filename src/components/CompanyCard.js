import React from "react";

const jobs = [
  {
    company: "Infosys",
    startDate: "12 July 2021",
    endDate: "31 June 2022",
    position: "Frontend Engineer",
    scopes: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    company: "Infosys",
    startDate: "12 July 2021",
    endDate: "31 June 2022",
    position: "Frontend Engineer",
    scopes: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    company: "Infosys",
    startDate: "12 July 2021",
    endDate: "31 June 2022",
    position: "Frontend Engineer",
    scopes: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    company: "Infosys",
    startDate: "12 July 2021",
    endDate: "31 June 2022",
    position: "Backend Engineer",
    scopes: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    company: "Infosys",
    startDate: "12 July 2021",
    endDate: "31 June 2022",
    position: "Frontend Engineer",
    scopes: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
];

const CompanyCard = ({ selectedItem, setSelectedItem }) => {
  return (
    <>
      <div className="mr-8 flex-col">
        {jobs.map((job, index) => (
          <div
            className={`py-4 pl-2 cursor-pointer w-32 text-center text-slate font-mono text-xs border-l-2 border-navy-lightest transition-colors duration-400 hover:bg-navy-light hover:text-aquamarine ${
              selectedItem === index ? "text-aquamarine bg-navy-light" : ""
            }`}
            key={index.toString() + job.company}
            onClick={() => {
              setSelectedItem(index);
            }}
          >
            {job.company}
          </div>
        ))}
      </div>
      <div className="flex-col">
        <p className="text-slate-lightest font-medium text-2xl">
          {jobs[selectedItem].position}
        </p>
        <p className="font-medium text-xs font-mono mb-6">
          {jobs[selectedItem].startDate} - {jobs[selectedItem].endDate}
        </p>
        <ul className="flex flex-col px-3 gap-3">
          {jobs[selectedItem].scopes.map((scope, index) => (
            <li key={index.toString() + "scope"} className="text-slate text-lg">
              {scope}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompanyCard;
