
import myPc from "../assets/myPC.ico"
import folder from "../assets/folder.ico"
import AboutComponent from './AboutComponent'
import { useState } from "react";
import Resume from './Resume'
import Footer from "./Footer";






    const Desktop = () => {
      
      const [isAboutOpen, setIsAboutOpen] = useState(false); // State to manage AboutComponent visibility
      const [isResumeOpen, setIsResumeOpen] = useState(false);// State to manage Resume visibility
     
      const handleOpenAbout = () => {
        setIsAboutOpen(true); // Open the AboutComponent
      };
    
      const handleCloseAbout = () => {
        setIsAboutOpen(false); // Close the AboutComponent
      };

      const handleOpenResume = () => {
        setIsResumeOpen(true);// Open the ResumeComponent
      };
    
      const handleCloseResume = () => {
        setIsResumeOpen(false);// open the Resume Component
      };

     
    
    

  return (
    <div className= ' fixed w-full h-full m-0 left-0 top-0 '>
        <div className="flex-col m-4 w-max cursor-pointer">
            <div className="w-max">  
            <img src={myPc} alt="myPC" width="64" height="64" />
            <p className="font-xp">This pc</p>
        </div>
        
        <div className="w-max  cursor-pointer" >  
            <img src={folder} alt="myPC" width="64" height="64" onClick={handleOpenAbout} />
            <p className="font-xp ">Contact </p>
        </div>
        <div className="w-max  cursor-pointer" >  
            <img src={folder} alt="myPC" width="64" height="64" onClick={handleOpenResume} />
            <p className="font-xp ">Resume </p>
        </div>
      
        </div>
        {isResumeOpen && <Resume onClose={handleCloseResume} />}
        {isAboutOpen && <AboutComponent onClose={handleCloseAbout} />}

        
        
     

        <div className="h-10 w- top-96 left-96">
        
        </div>
        
        <Footer />
        
      </div>
      
     
  )
}

export default Desktop;
