import Draggable from "react-draggable";
import close from "../assets/close.ico";
import text from "../assets/text.png";

const Project = ({ onClose }: { onClose: () => void }) => {
  return (
    <Draggable>
      <div className="bg-gray-100 absolute z-50 top-[150px] left-1/3 block w-max px-2 py-1 shadow-lg ">
       
        <div className="bg-Blue w-96 h-max p-2 flex justify-between items-center">
          <div className="text-white text-lg">Project.txt</div>
          <button
            className="bg-white"
            onClick={onClose} // Call onClose when clicked
          >
            <img src={close} alt="myPC" width="24" height="24" />
          </button>
        </div>

        <div className="bg-white w-96 h-max p-2 my-2 flex-col justify-items-start">
          <img src={text} alt="myPC" width="64" height="34" />
          <a
            className="text-zinc-950 hover:text-blue-500 block"
            href="https://github.com/Aniket7745/White-Board"
            target="_blank"
          >
            <p >Project-1</p>
            
          </a>
        </div>
      </div>
    </Draggable>
  );
};

export default Project;