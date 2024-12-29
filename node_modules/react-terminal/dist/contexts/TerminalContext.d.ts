import * as React from "react";
export type TerminalShell = {
    bufferedContent: React.ReactNode;
    temporaryContent: React.ReactNode;
    setBufferedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    setTemporaryContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    appendCommandToHistory: (command: string) => void;
    getNextCommand: () => string;
    getPreviousCommand: () => string;
};
export declare const TerminalContext: React.Context<TerminalShell>;
export declare const TerminalContextProvider: (props: any) => React.JSX.Element;
declare const _default: {
    TerminalContext: React.Context<TerminalShell>;
    TerminalContextProvider: (props: any) => React.JSX.Element;
};
export default _default;
