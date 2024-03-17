import { useState } from "react";
import Home from "./components/Home";
import Gridlayout from "./Components/gridlayout";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Skills from "./Components/Skills";
import "../src/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="bg-bgHome">
        <div className="flex pl-[8rem] justify-between items-center pr-[3rem] w-full h-[5rem] sticky top-0 z-[999] ">
          <div className=" text-4xl MDPrimer text-sk1 cursor-pointer [text-shadow:1px_1px_8px_var(--tw-shadow-color)] shadow-black">
            AYUSH NANDI
          </div>
          <div className="flex justify-between MDPrimer pl-[5rem] w-[35%] gap-[2rem] text-[1rem] font-semibold text-sk1 cursor-pointer [text-shadow:1px_1px_5px_var(--tw-shadow-color)] shadow-black">
            <div>
              <h6>Projects</h6>
            </div>
            <div>
              <h6>About</h6>
            </div>
            <div>
              <h6>Skills</h6>
            </div>
            <div>
              <h6>Contact</h6>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bg-bgHome h-[100vh]">
          <Home />
          <Gridlayout />
        </div>
        <div>
          <About />
          <Skills />
          <Projects />
        </div>
        <div className="h-[80vh]"></div>
      </div>
    </div>
  );
}

export default App;
