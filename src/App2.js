import { memo } from "react";
import { About, Button, Experience, Projects, SocialMedia } from "./components";
import logo from "./logo.svg";

const navbars = ["About", "Experience", "Projects", "Contact"];

function App2() {
  return (
    <div className="relative flex-col w-screen min-h-screen bg-navy text-slate">
      <header className="flex flex-row items-center justify-between p-6 md:px-12">
        <img src={logo} className="w-12 h-12 cursor-pointer" alt="logo" />
        <div className="items-center hidden gap-6 md:flex">
          {navbars.map((nav, i) => {
            return (
              <p
                key={i.toString()}
                className="font-mono text-xs transition-colors duration-200 cursor-pointer hover:text-aquamarine"
              >
                <span className="text-aquamarine">0{i + 1}.</span> {nav}
              </p>
            );
          })}
          <Button className="text-xs" text="Resume" />
        </div>
      </header>
      <div className="flex-col flex-1 md:py-18 md:px-54">
        <div className="flex-col gap-3 px-6">
          <p className="font-mono text-base text-aquamarine">Hi, my name is</p>
          <h1 className="text-3xl font-bold md:text-5xl text-slate-lightest">
            Ahmad Alfa Sakan
          </h1>
          <h2 className="text-3xl font-bold md:text-5xl text-slate">
            I build things for the web and mobile.
          </h2>
          <p className="max-w-lg text-base">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <Button
            className="mt-12 text-sm w-60"
            paddingTop={20}
            paddingBottom={20}
            paddingLeft={28}
            paddingRight={28}
            text="Check Out My Repositories"
          />
        </div>
        <About />
        <Experience />
        <Projects />
        {/* <Contact /> */}
      </div>
      <SocialMedia />
    </div>
  );
}

export default memo(App2);
