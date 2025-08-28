import "./App.css";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar name="Home" demo="Demo" btnText="Login"/>
      <Navbar name="contact" demo="service" btnText="Register"/>
    </>
  );
}

export default App;

