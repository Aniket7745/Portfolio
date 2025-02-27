import Draggable from "react-draggable";
import close from "../assets/close.ico";
import { useState } from "react";

const AboutComponent = ({ onClose }: { onClose: () => void }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`@kunduaniket440@gmail.com`);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Handle error, e.g., show an alert to the user
      alert("Copying failed. Your browser may not support this feature.");
    }
  };

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(`+91 8918192024`);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Handle error, e.g., show an alert to the user
      alert("Copying failed. Your browser may not support this feature.");
    }
  };

  return (
    <Draggable>
      <div className="bg-gray-100 absolute z-50 top-[20vh] left-[20vh] block w-max px-2 py-1 shadow-lg">
        {/* Title bar */}
        <div className="bg-Blue w-96 h-max p-2 flex justify-between items-center">
          <div className="text-white text-lg">Contact.txt</div>
          <button
            className="bg-white"
            onClick={onClose} // Call onClose when clicked
          >
            <img src={close} alt="myPC" width="24" height="24" />
          </button>
        </div>

        <div className="bg-white w-96 h-max p-2 my-2 flex-col justify-items-start">
          <h1 className="text-zinc-950">Let's connect</h1>
          <a
            className="text-zinc-950 hover:text-blue-500 flex"
            href="https://github.com/Aniket7745"
            target="_blank"
          >
            @github.com/Aniket7745
          </a>
          <a
            className="text-zinc-950 px-1 hover:text-blue-500 flex"
            href="https://www.instagram.com/okok.charity/"
            target="_blank"
          >
            @Instagram
          </a>

          <p
            className={`text-zinc-950 px-0 hover:text-blue-500 flex ${
              copied ? "copied" : ""
            }`}
            onClick={handleCopy}
            role="button"
          >
            @kunduaniket440@gmail.com
          </p>
          <p
            className={`text-zinc-950 px-0 hover:text-blue-500 flex${
              copied ? "copied" : ""
            }`}
            onClick={handleCopyNumber}
            role="button"
          >
            +91 8918192024
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutComponent;
