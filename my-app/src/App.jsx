import "./App.css";
import { useState } from "react";
import Box from "./components/Box.jsx";
import { Form } from "./components/Form.jsx";
import { Navbar } from "./components/Navbar.jsx";

// const dummy = [
// {
//   id: 1,
//   name: "Bansi",
//   title: "first",
//   text:'Login',
// },
// {
//   id: 2,
//   name: "Jyot",
//   title: "second",
//   text:'Register',
// },
// {
//   id: 3,
//   name: "Vrunda",
//   title: "third",
//   text:'Logout',
// },

// ];
function App() {
  const [allData, setAllData] = useState([]);

  const getFormData = (noteData) => {
    console.log(noteData);
    setAllData([noteData, ...allData]);
  };
  return (
    <>
      <Navbar name="Notes" />
      <Form getFormData={getFormData} />
      <div className="main">
        {allData.map((note) => (
          <div className="box" style={{backgroundColor:note.color}}>
            <Box name={note.title} title={note.desc} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
