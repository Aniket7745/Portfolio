import React from "react";
import { ReactTerminal } from "react-terminal";

function TerminalComponent() {
  const [theme, setTheme] = React.useState("material-dark");
  const [controlBar, setControlBar] = React.useState(true);
  const [controlButtons, setControlButtons] = React.useState(true);
  const [prompt, setPrompt] = React.useState("Users  ");

  const files = ["resume", "Contact", "About"];
  const [currentDirectory] = React.useState(">$");

  const commands = {
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>change_theme &lt;THEME&gt;</strong> -light, dark,
        material-light, material-dark, material-ocean, matrix and dracula.{" "}
        <br />
        <strong>math </strong> - Evaluates a mathematical expression <br />
        <strong>ls </strong> - Show <br />
        <strong>exit </strong> <br />
      </span>
    ),

    change_prompt: (prompt: React.SetStateAction<string>) => {
      setPrompt(prompt);
    },

    change_theme: (theme: string) => {
      const validThemes = [
        "light",
        "dark",
        "material-light",
        "material-dark",
        "material-ocean",
        "matrix",
        "dracula",
      ];
      if (!validThemes.includes(theme)) {
        return `Theme ${theme} not valid. Try one of ${validThemes.join(", ")}`;
      }
      setTheme(theme);
    },

    toggle_control_bar: () => {
      setControlBar(!controlBar);
    },

    toggle_control_buttons: () => {
      setControlButtons(!controlButtons);
    },

    math: async (expr: string | number | boolean) => {
      const response = await fetch(
        `https://api.mathjs.org/v4/?expr=${encodeURIComponent(expr)}`
      );
      return await response.text();
    },

    ls: () => {
      return (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      );
    },

    display_date: () => {
      return new Date().toLocaleString();
    },

    exit: () => {
      window.location.reload(); // Reload the entire website
      return "Restarting the website...";
    },
    resume: () => {
      return (
        <>
          <a
             className="text-zinc-950 hover:text-blue-500 block"
             href="https://drive.google.com/file/d/1EvlRrE3kUFPgijMXO81RnGDKAINrqIjn/view?usp=sharing"
             target="_blank"
             rel="noopener noreferrer"
             download
          >
            <p className="flex ">Resume.txt</p>
            
          </a></>
      );
    },
    contact: () => {
      return (
        <ul>
          <a
            className=" hover:text-white block"
            href="https://github.com/Aniket7745"
            target="_blank"
          >
            @github.com/Aniket7745
          </a>
          <a
            className="px-1 hover:text-white"
            href="https://www.instagram.com/okok.charity/"
            target="_blank"
          >
            @Instagram
          </a>

          <p className={` px-0 hover:text-blue-500 }`} role="button">
            @kunduaniket440@gmail.com
          </p>
          <p className={` px-0 hover:text-blue-500 `} role="button">
            +91 8918192024
          </p>
        </ul>
      );
    },
  };

  const welcomeMessage = (
    <span>
      Type "help" for all available commands. <br />
    </span>
  );

  return (
    <div
      className="absolute top-0 left-60 px-20 text-xp2"
      style={{
        width: "80vw",
        height: "80vh",

        alignItems: "flex-start", // Align items to the top
        justifyContent: "center", // Center horizontally
        paddingTop: "5px",
      }}
    >
      <ReactTerminal
        prompt={`${prompt} ${currentDirectory} `}
        theme={theme}
        showControlBar={false}
        showControlButtons={false}
        welcomeMessage={welcomeMessage}
        commands={commands}
        defaultHandler={(command: any, commandArguments: any[]) => {
          return `${command} passed on to default handler with arguments ${commandArguments.join(
            " "
          )}`;
        }}
      />
    </div>
  );
}

export default TerminalComponent;
