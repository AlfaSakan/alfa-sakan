import {
  About,
  Button,
  Contact,
  Experience,
  Projects,
  SocialMedia,
} from "./components";
import logo from "./logo.svg";

const navbars = ["About", "Experience", "Projects", "Contact"];

function App() {
  return (
    <div className="relative flex-col w-screen min-h-screen bg-navy text-slate">
      <header className="items-center justify-between py-6 px-12 flex-row flex">
        <img src={logo} className="h-8 cursor-pointer" alt="logo" />
        <div className="items-center gap-6">
          {navbars.map((nav, i) => {
            return (
              <p
                key={i.toString()}
                className="text-xs cursor-pointer transition-colors duration-200 font-mono hover:text-aquamarine"
              >
                <span className="text-aquamarine">0{i + 1}.</span> {nav}
              </p>
            );
          })}
          <Button className="text-xs" text="Resume" />
        </div>
      </header>
      <div className="flex-col flex-1 py-18 px-54">
        <div className="flex-col">
          <p className="font-mono text-aquamarine text-sm">Hi, my name is</p>
          <h1 className="text-5xl text-slate-lightest font-bold">
            Ahmad Alfa Sakan
          </h1>
          <h2 className="text-5xl font-bold text-slate">
            I build things for the web and mobile.
          </h2>
          <p className="text-xl mt-5 max-w-lg">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <Button
            className="w-60 text-sm mt-12"
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
        <Contact />
      </div>
      <SocialMedia />
    </div>
  );
}

export default App;
