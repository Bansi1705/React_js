import Logo from "../assets/react.svg";

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul>
       <li>Home</li>
       <li>About</li>
       <li>Services</li>
       <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
