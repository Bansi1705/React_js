import "./App.css";
import Navbar from "./components/Navbar";
import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getFormData = (noteData) => {
    console.log(noteData);
    setAllData([...allData, { ...noteData, id: uuidv4() }]);
  };

  const deleteHandler = (id) => {
    console.log(id);
    const filterData = allData.filter((note) => {
      return note.id !== id;
    });
    console.log(filterData);
    setAllData(filterData);
  };
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <Navbar name="Notes" toggleMode={toggleMode} isDarkMode={isDarkMode} />
      <Form getFormData={getFormData} btnText={"Submit"} />
      <div className="allCard">
        {allData.length > 0 ? (
          allData.map((item) => {
            return (
              <div
                className="card"
                key={item.id}
                style={{ backgroundColor: item.color }}
              >
                <Card
                  name={item.title}
                  title={item.desc}
                  btnText={"Delete"}
                  deleteHandler={() => deleteHandler(item.id)}
                />
              </div>
            );
          })
        ) : (
          <p>No Data found</p>
        )}
      </div>
    </>
  );
}

export default App;
