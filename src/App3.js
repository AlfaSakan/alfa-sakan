import React, { useCallback, useState } from "react";
import Github from "./components/icons/Github";
import Gmail from "./components/icons/Gmail";

const gradientStyle = "from-red-600 to-blue-600 bg-gradient-to-tr";
const gradientTopStyle =
  "from-red-600 to-red-600 bg-gradient-to-t via-blue-600 transition-all bg-size-200 duration-500 hover:bg-pos-100 bg-pos-0";
const gradientRightStyle =
  "from-red-600 to-red-600 via-blue-600 bg-gradient-to-r transition-all bg-size-200 duration-500 hover:bg-pos-100 bg-pos-0";

const detailProjects = [
  {
    title: "Project A",
    description:
      "Integer sed interdum augue, vel rhoncus ligula. Aenean pellentesque metus metus, vel posuere nisi pretium ac. Vestibulum elementum mi ut condimentum auctor. Vivamus tincidunt augue mauris. Ut nec turpis sed eros interdum luctus in eu mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a nibh accumsan, tincidunt sem eget, iaculis mauris.",
  },
  {
    title: "Project Baskncle",
    description:
      "Ut id lacus ut leo volutpat varius nec et turpis. Duis quis dui purus. Cras porta euismod mattis. Vestibulum finibus metus vel sapien rhoncus, eget dictum nunc placerat.",
  },
  {
    title: "Project Claksnclaieiblnl",
    description:
      "Donec blandit dolor non purus feugiat, sit amet malesuada ligula fermentum. Vestibulum eu accumsan sem. Mauris tincidunt facilisis arcu vel maximus. In interdum lectus massa, quis aliquam mauris tristique ac. Cras in nisl consequat, suscipit dolor nec, ultrices velit.",
  },
  {
    title: "Project D",
    description:
      "Integer sed interdum augue, vel rhoncus ligula. Aenean pellentesque metus metus, vel posuere nisi pretium ac. Vestibulum elementum mi ut condimentum auctor. Vivamus tincidunt augue mauris. Ut nec turpis sed eros interdum luctus in eu mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a nibh accumsan, tincidunt sem eget, iaculis mauris.",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia
            enim in dui porta consequat. Maecenas sed mollis nisl. Nullam
            feugiat ornare metus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nam lacinia enim in dui porta consequat. Maecenas
            sed mollis nisl. Nullam feugiat ornare metus.
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
        <div className="flex-col pl-4 bg-slate-900">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

function Projects({ onClick }) {
  return (
    <div className="flex-col w-full gap-6">
      <h1 className="text-3xl font-light">Project</h1>
      <div className="relative">
        <ContainerGradient className="top-0 left-0 w-24 h-24 pt-1 pl-1" />
        <div className="z-10 flex-col gap-4 pt-8 pl-8">
          {projects.map((project, index) => (
            <div
              key={project}
              className={`pb-[2px] w-fit ${gradientRightStyle}`}
            >
              <button
                className="w-fit bg-slate-900"
                onClick={() => onClick(index)}
              >
                <p>{project}</p>
              </button>
            </div>
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
          <h1 className="text-5xl font-bold">A</h1>
        </button>
        <div className="items-center gap-8">
          <a
            aria-label="email"
            target="_blank"
            href="mailto:alfasakan11@gmail.com?subject=Email from alfasakan.site"
            rel="noreferrer"
          >
            <Gmail />
          </a>
          <a
            aria-label="github"
            target="_blank"
            href="https://github.com/alfasakan"
            rel="noreferrer"
          >
            <Github />
          </a>
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
