import { setTheme } from "../utils/theme";

const ThemeSwitch = () => {
  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  };
  return (
    <button className="bajsbutton" onClick={() => handleOnClick()}>
      Switch theme
    </button>
  );
};

export default ThemeSwitch;
