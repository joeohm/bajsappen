import { setTheme } from "../utils/theme";
import { useState } from "react";

const ThemeSwitch = () => {
  const [style, setStyle] = useState(
    `${
      localStorage.getItem("theme") === "theme-dark" ? "night-mode" : "day-mode"
    }`
  );

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setStyle("day-mode");
    } else {
      setTheme("theme-dark");
      setStyle("night-mode");
    }
  };
  return (
    <div className={`theme-switcher`} onClick={() => handleOnClick()}>
      <div className={`switcher-top ${style}`}></div>
      <div className="switcher-bottom"></div>
    </div>
  );
};

export default ThemeSwitch;

/*
<button className="bajsbutton" onClick={() => handleOnClick()}>
      Switch theme
    </button>
    */
