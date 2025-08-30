import "./App.css";
import Navbar from "./components/Navbar";
import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { useState } from "react";

// const dummy = [
//   {
//     id: 1,
//     name: "Bansi",
//     text: "Chudasama",
//   },
//   {
//     id: 2,
//     name: "Jyot",
//     text: "Chudasama",
//   },
//   {
//     id: 3,
//     name: "vrunda",
//     text: "chudasama",
//   },
// ];
function App() {
  const [allData, setAllData] = useState([]);
  const getFormData = (noteData) => {
    console.log(noteData);
    setAllData([noteData]);
  };
  return (
    <>
      <Navbar name="Notes" />
      <Form getFormData={getFormData} btnText={"Submit"}/>
      <div className="allCard">
        {allData.map((item) => {
          return <Card name={item.title} title={item.desc} btnText={"Delete"}/>;
        })}
      </div>
    </>
  );
}

export default App;
