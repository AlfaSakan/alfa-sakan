import React, { useCallback, useState } from "react";
import Github from "./components/icons/Github";
import Gmail from "./components/icons/Gmail";
import Linkedin from "./components/icons/Linkedin";

const gradientStyle = "from-red-600 to-blue-600 bg-gradient-to-tr";
const gradientTopStyle =
  "from-red-600 to-red-600 bg-gradient-to-t via-blue-600 transition-all bg-size-200 duration-500 hover:bg-pos-100 bg-pos-0";
const gradientRightStyle =
  "from-red-600 to-red-600 via-blue-600 bg-gradient-to-r transition-all bg-size-200 duration-500 hover:bg-pos-100 bg-pos-0";

const detailProjects = [
  {
    title: "PermataMobile X",
    description:
      "PermataMobile X is a mobile banking application developed to provide users with easy access to Permata Bank's banking services through their mobile devices. As a Frontend Developer in PermataMobile X, I am responsible for developing the user interface and functionality of the parts of the application that are accessible by the users. My role involves designing and developing user-friendly interfaces, ensuring application responsiveness and speed, and ensuring compatibility between the application and various mobile devices.",
    playstore:
      "https://play.google.com/store/apps/details?id=net.myinfosys.PermataMobileX&hl=en&gl=US",
  },
  {
    title: "BTN Properti",
    description:
      "As a frontend developer for BTN Properti's Mobile Application, my primary responsibility is to create an intuitive and visually appealing interface that provides a seamless user experience for property buyers and sellers. Working closely with the UX/UI design team and backend developers, I ensure that the application is user-friendly and secure, providing an efficient and convenient way for users to browse and purchase properties.",
    playstore:
      "https://play.google.com/store/apps/details?id=btn.properti.android&hl=id",
  },
  {
    title: "Cashier App",
    description:
      "The point-of-sale application that I developed provides a modern and user-friendly interface for managing sales and inventory. The application includes features such as real-time inventory tracking, customer management, and payment processing, making it an ideal solution for small and medium-sized businesses. With a focus on usability and functionality, the application is optimized for both desktop and mobile devices, providing a seamless experience for users.",
    site: "https://cashier.alfasakan.site",
    github: "https://github.com/AlfaSakan/cashier-app",
  },
];

const iconContacts = [
  {
    icon: Gmail,
    href: "mailto:alfasakan11@gmail.com?subject=Email from alfasakan.site",
    name: "Email",
  },
  { icon: Github, href: "https://github.com/alfasakan", name: "Github" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alfasakan/",
    name: "Linkedin",
  },
];

const projects = detailProjects.map((d) => d.title);

function Intro({ isShow, isHide }) {
  return (
    <div
      className={`flex-col gap-10 opacity-0 origin-left ${
        isShow ? "animate-showContent" : ""
      } ${isHide ? "animate-hideContent" : ""}`}
    >
      <h1 className="text-5xl font-thin md:text-8xl">Welcome</h1>
      <div className={`pl-1 ${gradientTopStyle}`}>
        <div className={`flex-col pl-4 bg-slate-900 md:pl-6`}>
          <p>
            My name Ahmad Alfa Sakan, A highly skilled frontend developer with a
            passion for creating dynamic and engaging user interfaces. My
            approach to development is rooted in creativity, attention to
            detail, and user-centric design principles.
          </p>
          <br />
          <p>
            I use NextJs, ReactJs, and React Native in my project. I am
            comfortable working independently or as part of a team, and I thrive
            in fast-paced and challenging environments.
          </p>
        </div>
      </div>
    </div>
  );
}

function DetailProject({ data, isShow, isHide }) {
  return (
    <div
      className={`absolute flex-col gap-4 opacity-0 origin-right ${
        isShow ? "animate-showContent" : ""
      } ${isHide ? "animate-hideContent" : ""}`}
    >
      <h1 className="text-xl">{data.title}</h1>
      <div className={`pl-1 ${gradientTopStyle}`}>
        <div className="flex-col gap-4 pl-4 bg-slate-900">
          <p>{data.description}</p>
          <div className="items-center gap-4">
            {data.playstore && (
              <AnchorBorderBottomGradient
                text="Play Store"
                href={data.playstore}
              />
            )}
            {data.site && (
              <AnchorBorderBottomGradient text="View Site" href={data.site} />
            )}
            {data.github && (
              <AnchorBorderBottomGradient text="Github" href={data.github} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnchorBorderBottomGradient({ text, href }) {
  return (
    <div className={`pb-[2px] w-fit ${gradientRightStyle}`}>
      <a
        className="pb-1 w-fit bg-slate-900"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  );
}

function TextBorderBottomGradient({ project, onClick, index }) {
  return (
    <div className={`pb-[2px] w-fit ${gradientRightStyle}`}>
      <button
        className="pb-1 w-fit bg-slate-900"
        onClick={() => onClick(index)}
      >
        <p>{project}</p>
      </button>
    </div>
  );
}

function Projects({ onClick }) {
  return (
    <div className="flex-col w-full gap-6">
      <h1 className="text-3xl font-light">Projects</h1>
      <div className="relative">
        <ContainerGradient className="top-0 left-0 w-24 h-24 pt-1 pl-1" />
        <div className="z-10 flex-col gap-4 pt-8 pl-8">
          {projects.map((project, index) => (
            <TextBorderBottomGradient
              index={index}
              project={project}
              key={project}
              onClick={() => onClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContainerGradient({ className }) {
  return (
    <div
      className={`absolute items-end justify-end rounded-tl-lg ${gradientStyle} ${className}`}
    >
      <div className="w-full h-full rounded-tl bg-slate-900" />
    </div>
  );
}

function Header({ onClickLogo }) {
  return (
    <div className="relative mb-6 md:mb-0">
      <ContainerGradient className="top-0 left-0 w-24 h-24 pt-2 pl-2 md:w-56 md:h-56 md:pt-5 md:pl-5 lg:w-72 lg:h-72" />
      <header className="z-10 flex items-center justify-between w-full px-5 py-4 md:px-11 md:py-9">
        <button onClick={onClickLogo}>
          <h1 className="text-6xl font-bold lg:text-8xl md:text-7xl">A</h1>
        </button>
        <div className="items-center gap-8">
          {iconContacts.map((contact, index) => (
            <a
              aria-label={contact.name}
              target="_blank"
              href={contact.href}
              rel="noreferrer"
              key={index + contact.name}
            >
              <contact.icon />
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-center pb-3 mt-12 md:justify-end md:pr-6 md:pb-6">
      <p>©{new Date().getFullYear()} alfasakan.site</p>
    </footer>
  );
}

function App3() {
  const [selected, setSelected] = useState(-1);
  const [previousContent, setPreviousContent] = useState(-2);

  const handleSelectContent = useCallback(
    (idx) => {
      if (idx === -1 && selected === -1) return;

      setPreviousContent(selected);

      if (selected === idx) {
        setSelected(-1);
        return;
      }

      setSelected(idx);
    },
    [selected]
  );

  return (
    <div className="flex-col w-screen min-h-screen overflow-y-scroll font-sans text-white bg-slate-900 lg:px-28 lg:py-6">
      <Header onClickLogo={() => handleSelectContent(-1)} />
      <main className="flex flex-col flex-1 px-5 gap-18 md:px-11 lg:flex-row lg:items-center lg:justify-center">
        <div className="relative flex-1 lg:flex-[2] lg:ml-12">
          <Intro isShow={selected === -1} isHide={previousContent === -1} />
          {detailProjects.map((d, index) => (
            <DetailProject
              key={Math.random() * 100}
              data={d}
              isShow={index === selected}
              isHide={previousContent === index}
            />
          ))}
        </div>
        <div className="flex-1">
          <Projects onClick={handleSelectContent} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App3;
