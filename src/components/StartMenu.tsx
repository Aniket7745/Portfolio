import { useState } from 'react';
import close from '../assets/close.ico'
import Resume from './Resume';
import AboutComponent from './AboutComponent';
import profilePicture from '../assets/profilePicture.png';
import ShutDown from '../assets/Shutdown.png'

const StartMenu = ({ onClose }: { onClose: () => void }) => {
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
    <div>
       <div className="bg-gray-100 absolute bottom-10 left-0 block w-max px-2 py-1 shadow-lg">
        
        <div className="bg-Blue w-64 h-max p-2 flex justify-between items-center">
          <div className="text-white text-lg">
          <div className='flex w-60 justify-between'>
            <div className='bg-white w-10 h-10 rounded-md'>
            <img className='child h-full w-full rounded-md' src={profilePicture} alt="Close"  />
            </div>
            <p>Start Menu</p>
            <button
            className="bg-white h-8 w-8 p-1 rounded-md  "
            onClick={onClose} // Call onClose when clicked
            aria-label="Close Start Menu"
            >
            <img src={close} alt="Close" width="24" height="24"  />
          </button>
          </div>
          </div>

           
        </div>
        <div className="bg-white w-64 h-max p-2 my-2 flex-col justify-items-start">
          <p className="text-zinc-950 cursor-pointer" onClick={handleOpenAbout}>About</p>
          <p className="text-zinc-950 cursor-pointer" onClick={handleOpenResume}>Resume</p>
          <p className="text-zinc-950  cursor-pointer">Credit</p>
          <p className="text-zinc-950  cursor-pointer">Terminal</p>
          
        </div>

        <div className="bg-white w-64 h-max p-2 my-2 flex justify-between">
            <p className='text-black py-2'>shutdown </p>
            <button className='bg-red-700 h-8 w-8 p-1 rounded-md'>
            <img src={ShutDown} alt="Close" width="40" height="40"  />
            </button>
        </div>
      </div>
      {isResumeOpen && <Resume onClose={handleCloseResume} />}
      {isAboutOpen && <AboutComponent onClose={handleCloseAbout} />}

    </div>
  )
}

export default StartMenu
