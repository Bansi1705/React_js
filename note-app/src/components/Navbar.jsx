import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

function Navbar({ name, isDarkMode, toggleMode }) {
  return (
    <nav className={`${!isDarkMode ? "nav" : "nav-light"}`}>
      <ul>
        <li>{name}</li>
      </ul>
      <div onClick={toggleMode}>
        {!isDarkMode ? (
          <IoSunny color="white" size={30} />
        ) : (
          <FaMoon color="white" size={30} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
