import * as React from "react";
export declare const useEditorInput: (consoleFocused: boolean, editorInput: string, setEditorInput: any, setProcessCurrentLine: any, caretPosition: number, setCaretPosition: any, setBeforeCaretText: any, setAfterCaretText: any, enableInput: boolean, commands: any) => void;
export declare const useBufferedContent: (processCurrentLine: any, setProcessCurrentLine: any, prompt: string, currentText: any, setCurrentText: any, setCaretPosition: any, setBeforeCaretText: any, setAfterCaretText: any, commands: any, errorMessage: any, defaultHandler: any) => void;
export declare const useCurrentLine: (caret: boolean, consoleFocused: boolean, prompt: string, commands: any, errorMessage: any, enableInput: boolean, defaultHandler: any, wrapperRef: any) => React.JSX.Element;
export declare const useScrollToBottom: (changesToWatch: any, wrapperRef: any) => void;
