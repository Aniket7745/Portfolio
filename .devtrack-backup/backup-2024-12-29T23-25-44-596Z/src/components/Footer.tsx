import { useEffect, useState } from 'react'
import Start from "../assets/Start.png"
import StartMenu from './StartMenu';
const Footer = () => {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDateTime(new Date().toLocaleString());
      }, 1000); 
  
      
      return () => clearInterval(intervalId);
    }, []); 
    
    
    const [isStartOpen, setIsStartOpen] = useState(false);
    const handleOpenStart = () => {
      setIsStartOpen(true);
    }
    const handleCloseStart = () => {
      setIsStartOpen(false);
    }


  return ( 
    <div>
    <footer className="flex justify-between items-center  bg-Blue fixed w-full m-0 left-0 bottom-0    ">
    <div className='bg-Green flex w-max px-7 rounded-r-lg  font-xp hover:bg-green-600' onClick={handleOpenStart} >
    <div className="flex" >  
            <img src={Start} alt="myPC" width="32" height="32" />
            <p className="font-xp  m-2">Start </p>
        </div>
    </div>
    <div className='text-xp2 text-lg  text-white'>
    | Aniket kundu || Age:21 || West Bengal || India |
    </div>

    <div className='bg-Green w-max px-7 py-2 rounded-l-lg font-xp hover:bg-green-600 '>
    {dateTime}
    </div>
  
</footer>
{ isStartOpen && <StartMenu onClose={handleCloseStart} />}
</div>
  )
}

export default Footer;
