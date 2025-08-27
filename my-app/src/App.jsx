import "./App.css";
import Box from "./components/Box.jsx";
import {Form } from "./components/Form.jsx";

const dummy =[
  {
    id:1,
    name:'bansi',
    title:'first',   
  },
  {
    id:1,
    name:'jyot',
    title:'second',   
  },
  {
    id:1,
    name:'vrunda',
    title:'third',   
  }
];
function App() {
  return (
    <>
      <div className="main">
         {dummy.map((item ,index) =>
          {
            return (
            <div key={index}>
              <Box name={item.name} title={item.title}/>
            </div>
            );
          }
          )
         }
      </div>
      <Form/>
    </>
  );
}

export default App;
