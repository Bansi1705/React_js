import "./App.css";
import Box from "./components/Box.jsx";
import { Form } from "./components/Form.jsx";

const dummy = [
  {
    id: 1,
    name: "Bansi",
    title: "first",
    text:'Login',
  },
  {
    id: 2,
    name: "Jyot",
    title: "second",
    text:'Register',
  },
  {
    id: 3,
    name: "Vrunda",
    title: "third",
    text:'Logout',
  },
];
function App() {
  return (
    <>
      <div className="main">
        {dummy.map((item, index) => {
          return (
            <div key={index}>
              <Box name={item.name} title={item.title} btnText={item.text}/>
            </div>
          );
        })}
      </div>
      <Form />
    </>
  );
}

export default App;
