import myPc from "../assets/myPC.ico";
import folder from "../assets/folder.ico";
import AboutComponent from "./AboutComponent";
import { useEffect, useState } from "react";
import Resume from "./Resume";
import Footer from "./Footer";
import Terminal from "./Terminal";
import cmd from "../assets/cmd.png";
import Clippy from "../assets/clippy.gif";
import Project from "./Project";

const Desktop = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State to manage AboutComponent visibility
  const [isResumeOpen, setIsResumeOpen] = useState(false); // State to manage Resume visibility
  const [isTerminalOpen, setIsTerminalOpen] = useState(false); // State to manage terminal visibility

  const [isProjectOpen, setIsProjectOpen] = useState(false); // State to manage Project visibility
  

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

  const handleOpenProject = () => {
    setIsProjectOpen(true); // Open the Project
  };

  const handleCloseProject = () => {
    setIsProjectOpen(false); // open the Project
  };



  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible); // Toggle visibility
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []); // Empty dependency array ensures this runs only once on mount

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
        <div className="w-max  cursor-pointer">
          <img
            src={folder}
            alt="myPC"
            width="64"
            height="64"
            onClick={handleOpenProject}
          />
          <p className="font-xp2 ">Project </p>
        </div>
      </div>
      {isResumeOpen && <Resume onClose={handleCloseResume} />}
      {isAboutOpen && <AboutComponent onClose={handleCloseAbout} />}
      {isProjectOpen && <Project onClose={handleCloseProject} />}
      
      <div className="h-10 w- top-96 left-96">
        {isTerminalOpen && <Terminal onClose={handleCloseTerminal} />}
      </div>
      <div>
        {isVisible && (
          <img
            className="absolute bottom-50 right-0"
            src={Clippy}
            alt="myPC"
            width="250"
            height="250"
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Desktop;
