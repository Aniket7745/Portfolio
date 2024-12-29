import Draggable from "react-draggable";
import close from "../assets/close.ico";
import text from "../assets/text.png";

const Resume = ({ onClose }: { onClose: () => void }) => {
  return (
    <Draggable>
      <div className="bg-gray-100 absolute top-1/2 left-1/3 block w-max px-2 py-1 shadow-lg">
        {/* Title bar */}
        <div className="bg-Blue w-96 h-max p-2 flex justify-between items-center">
          <div className="text-white text-lg">Resume.txt</div>
          <button
            className="bg-white"
            onClick={onClose} // Call onClose when clicked
          >
            <img src={close} alt="myPC" width="24" height="24" />
          </button>
        </div>

        <div className="bg-white w-96 h-max p-2 my-2 flex-col justify-items-start">
          <img src={text} alt="myPC" width="64" height="34" />
          <p className="text-black">Resume.txt</p>
        </div>
      </div>
    </Draggable>
  );
};

export default Resume;
