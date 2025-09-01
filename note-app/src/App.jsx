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
    setAllData([noteData, ...allData]);
  };
  return (
    <>
      <Navbar name="Notes" />
      <Form getFormData={getFormData} btnText={"Submit"} />
      <div className="allCard">
        {allData.map((item) => {
          return (
            <div
              className="card"
              key={item.id}
              style={{ backgroundColor: item.color }}
            >
              <Card name={item.title} title={item.desc} btnText={"Delete"} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
