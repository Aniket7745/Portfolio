import myPc from "../assets/myPC.ico";
import folder from "../assets/folder.ico";
import AboutComponent from "./AboutComponent";
import { useState } from "react";
import Resume from "./Resume";
import Footer from "./Footer";
import Terminal from "./Terminal";
import cmd from "../assets/cmd.png";

const Desktop = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State to manage AboutComponent visibility
  const [isResumeOpen, setIsResumeOpen] = useState(false); // State to manage Resume visibility
  const [isTerminalOpen, setIsTerminalOpen] = useState(false); // State to manage terminal visibility

  const handleOpenAbout = () => {
    setIsAboutOpen(true); // Open the AboutComponent
  };

  const handleCloseAbout = () => {
    setIsAboutOpen(false); // Close the AboutComponent
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true); // Open the ResumeComponent
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false); // open the Resume Component
  };
  const handleOpenTerminal = () => {
    setIsTerminalOpen(true); // Open the Terminal Component
  };

  const handleCloseTerminal = () => {
    setIsTerminalOpen(false); // open the Terminal Component
  };

  return (
    <div className=" fixed w-full h-full m-0 left-0 top-0 ">
      <div className="flex-col m-4 w-max cursor-pointer">
        <div className="w-max">
          <img src={myPc} alt="myPC" width="64" height="64" />
          <p className="font-xp">This pc</p>
        </div>

        <div className="w-max  cursor-pointer">
          <img
            src={folder}
            alt="myPC"
            width="64"
            height="64"
            onClick={handleOpenAbout}
          />
          <p className="font-xp2 ">Contact </p>
        </div>
        <div className="w-max  cursor-pointer">
          <img
            src={folder}
            alt="myPC"
            width="64"
            height="64"
            onClick={handleOpenResume}
          />
          <p className="font-xp2 ">Resume </p>
        </div>
        <div className="w-max  cursor-pointer">
          <img
            src={cmd}
            alt="myPC"
            width="64"
            height="64"
            onClick={handleOpenTerminal}
          />
          <p className="font-xp2 ">Comand prompt</p>
        </div>
      </div>
      {isResumeOpen && <Resume onClose={handleCloseResume} />}
      {isAboutOpen && <AboutComponent onClose={handleCloseAbout} />}

      <div className="h-10 w- top-96 left-96">
        {isTerminalOpen && <Terminal onClose={handleCloseTerminal} />}
      </div>

      <Footer />
    </div>
  );
};

export default Desktop;
