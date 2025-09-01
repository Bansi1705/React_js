import { Button } from "./Button";
export const Card = ({ name, title, btnText }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>Now I am Learning React-js</p>
      <Button btnText={btnText} />
    </div>
  );
};
