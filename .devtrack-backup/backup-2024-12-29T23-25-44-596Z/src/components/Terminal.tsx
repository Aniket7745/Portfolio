import TerminalComponent from "./TerminalComponent/TerminalComponent";
import { TerminalContextProvider } from "react-terminal";

const Terminal = ({}: { onClose: () => void }) => {
  return (
    <div>
      <TerminalContextProvider>
        <TerminalComponent />
      </TerminalContextProvider>
    </div>
  );
};

export default Terminal;
