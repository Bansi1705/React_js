import Logo from "../assets/react.svg";
import { Button } from "./Button";

function Navbar( {name , demo ,btnText}) {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul>
       <li>{name}</li>
       <li>{demo}</li>
      </ul>
      <Button btnText={btnText}/>
    </nav>
  );
}

export default Navbar;
