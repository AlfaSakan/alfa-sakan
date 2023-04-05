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
      <div className="mr-8 md:flex-col">
        {jobs.map((job, index) => (
          <div
            className={`py-4 pl-2 cursor-pointer w-32 text-center text-slate font-mono text-xs md:border-l-2 md:border-t-0 border-t-2 border-navy-lightest transition-colors duration-400 hover:bg-navy-light hover:text-aquamarine ${
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
        <p className="text-2xl font-medium text-slate-lightest">
          {jobs[selectedItem].position}
        </p>
        <p className="mb-6 font-mono text-xs font-medium">
          {jobs[selectedItem].startDate} - {jobs[selectedItem].endDate}
        </p>
        <ul className="flex flex-col gap-3 px-3">
          {jobs[selectedItem].scopes.map((scope, index) => (
            <li key={index.toString() + "scope"} className="text-lg text-slate">
              {scope}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompanyCard;
