import * as React from "react";
interface TerminalProps {
    enableInput: boolean;
    caret: boolean;
    theme: string;
    showControlBar: boolean;
    showControlButtons: boolean;
    controlButtonLabels: string[];
    prompt: string;
    commands: Record<string, (...args: never) => void>;
    welcomeMessage: string | (() => void) | React.ReactNode;
    errorMessage: string | ((...args: never) => void) | React.ReactNode;
    defaultHandler: ((...args: never) => void) | null;
}
declare const Terminal: React.FC<TerminalProps>;
export default Terminal;
