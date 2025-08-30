import { Button } from "./Button";
export const Card = ({ name, title ,btnText}) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h3>{title}</h3>
      <Button btnText={btnText}/>
    </div>
  );
};
