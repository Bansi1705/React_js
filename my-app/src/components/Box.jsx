// import { Button } from "./Button.jsx";
function Box({ name, title }) {
  return (
    <div className="box">
      <h1>{name}</h1>
      <h4>{title}</h4>
      <p>{"Hello every one I am Student of Sem 5."}</p>
      <button>{"Delete"}</button>
      {/* <Button btnText={btnText} /> */}
    </div>
  );
}

export default Box;
